import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { PipingCircuitService } from './piping-circuits.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddCircuitComponent } from './add-circuit/add-circuit.component';
import { DatePipe } from '@angular/common';
import { MatTableComponent } from '../../../component/mat-table/mat-table.component';
import { DeleteDialogComponent } from '../../../component/delete dialog/delete-dialog.component';
import { AsyncSubject } from 'rxjs';
import { PageMenuService } from '../../pages-service';
import { PDFCircuitDashboard } from './pdf-circuits/pdf-circuit-dashboard';
import * as XLSX from 'xlsx/xlsx.mjs';
import { Variables } from '../../../component/common-variable';
import * as FileSaver from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn : 'root'
})
@Component({
  selector: 'ngx-piping-circuits',
  templateUrl: './piping-circuits.component.html',
})
export class PipingCircuitsComponent implements OnInit {

  constructor(
    private circuitService : PipingCircuitService,
    private dialogService : NbDialogService,
    private toastrService: NbToastrService,
    private datePipe : DatePipe,
    private pageMenuService : PageMenuService,
    private variables : Variables
  ) {}

  @ViewChild(MatTableComponent) viewTable : MatTableComponent;
  @ViewChild(PDFCircuitDashboard) pdfCircuit : PDFCircuitDashboard

  ngOnInit(): void {
    this.circuitService.getPipingCircuits()
    .subscribe(({data} : any) => {
      this.tableData = data
      this.viewTable.regenerateTable(data)
    })
  }

  tableData:any[];
  tableHeader = { 
    title : 'Piping Circuits', 
    filter : [
      { name : "Class", value : ["All",1,2,3,4], title : 'class-circuit', selection : 'All' } 
    ]
  }

  columnDetails = [ 
    { type : 'select', prop : 'select', head : '', width : '20px' },
    { type : 'text', prop : 'piping_circuit_id', head : 'Piping Circuit Id', width : '100px' },
    { type : 'text', prop : 'piping_circuit_name', head : 'Piping Circuit Name', width : '200px' },
    { type : 'text', prop : 'date_in_service', head : 'Date In Service', width : '200px' },
    { type : 'text', prop : 'class', head : 'Class', width : '50px' },
    { type : 'text', prop : 'notes', head : 'Notes', width : '400px' },
    { type : 'button', prop : 'edit', width : '80px', button : [
      { icon : 'edit-outline', status : 'info', title : "update-circuits" },
      { icon : 'trash-2-outline', status : 'danger', title : "delete-circuits" },
    ]},
  ]

  onClickTable(data, title) {
    if(title == 'class-circuit') {
      if(data == 'All')
      this.viewTable.regenerateTable(this.tableData)
      else {
        const tableData = this.tableData.filter(item => item.class == data)
        this.viewTable.regenerateTable(tableData)
      }
    }

    if(title == 'update-circuits') this.updateCircuit(data)
    if(title == 'delete-circuits') this.deleteCircuit(data)
  }

  private dataSubject = new AsyncSubject<any>();
  uploadImage(image) {
    const formData = new FormData(); 
    formData.append('image', image);
    this.pageMenuService.addImage(formData)
    .subscribe(
      res => {
      this.dataSubject.next(res);
      this.dataSubject.complete();
    },
    () => this.toastrService.danger('Please check your connection and try again.', 'Failed to upload image.'),
    )
  }

  importExcelFile(event) {
    const fileName = event.target.files[0];
    if(!fileName) return;
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(fileName);
    fileReader.onload = (e : any) => { 
      const binaryData = e.target.result;
      const workbook = XLSX.read(binaryData, {type : 'binary'});
      const sheet = workbook.Sheets[workbook.SheetNames[0]]
      let index = 0;
      let looping = true;
      while(looping) {
        const obj = "A" + index;
        if(index > 100) looping = false;
        if(sheet[obj]) {
            looping = false;
            break;
        }
        index++;
      }
      const data = XLSX.utils.sheet_to_json(sheet, {range: index - 1, defval: ""});
      this.reconstructDataExcel(data);
    }
  }

  reconstructDataExcel(data) {
    const resultData = data.map(({
      ['Piping Circuit Id'] : piping_circuit_id,
      ['Piping Circuit Name'] : piping_circuit_name, 
      ['Notes'] : notes,
      ['Class'] : classes,
      ['Date In Service'] : date_in_service,
      ['Recommendation'] : recomendation,
    }) => {
      date_in_service = this.variables.transformExcelDate(date_in_service)
      date_in_service = this.datePipe.transform(date_in_service, 'yyyy-MM-dd')
      return {
        piping_circuit_id,
        piping_circuit_name,
        notes,
        class : classes,
        date_in_service,
        recomendation
      }
    })

    console.log(resultData)
    this.circuitService.importCircuits(resultData)
    .subscribe(
      () => this.ngOnInit(),
      () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
      () => this.toastrService.success('Data has been imported.', 'Your request success.')
    )
  }

  exportExcelFile() {
    const data = this.viewTable.selectTableRow()
    const worksheet : XLSX.WorkSheet = XLSX.utils.json_to_sheet(data)
    const woorkbook : XLSX.WoorkBook = {Sheets : {'Piping Circuit' : worksheet}, SheetNames : ['Piping Circuit']}
    const excelBuffer : any = XLSX.write(woorkbook, {bookType : 'xlsx', type : 'array' });
    this.saveAsExcelFile(excelBuffer, 'Circuit')
  }

  saveAsExcelFile(buffer : any, excelFileName : string) : void {
    const data : Blob = new Blob([buffer], {type : EXCEL_TYPE});
    FileSaver.saveAs(data, excelFileName + '_PIPING_MONITORING_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  addCircuit() {
    this.dialogService.open(AddCircuitComponent, {
      context: {
        dialogData : {
          title: 'Add Circuit',
        }
      },
    })
    .onClose
    .subscribe(newData => {
      if(!newData) return
      this.reconstructDataCircuit(newData, 'add')
    });
  }

  updateCircuit(data) {
    const piping_id = data.piping.map(item => item.id)
    this.dialogService.open(AddCircuitComponent, {
      context: {
        dialogData : {
          title: 'Update Circuit',
          data : {
            ...data,
            date_in_service : new Date(data.date_in_service),
            piping_id 
          }
        }
      },
    })
    .onClose
    .subscribe(newData => {
      if(!newData) return
      this.reconstructDataCircuit(newData, 'update', data)
    });
  }

  reconstructDataCircuit(newData, title, oldData = null) {
    const { image } = newData;
    if(image)
    for(let img of image) this.uploadImage(img)
    this.dataSubject.asObservable()
    .subscribe(res => {
      let images = [...oldData?.images ?? []];
      let lastId = res.data.id
      for(let i = lastId; i < lastId + image.length; i++) images.push(i)
      const uploadData = {
        ...oldData,
        ...newData,
        images,
        date_in_service : this.datePipe.transform(newData.date_in_service, 'yyyy-MM-dd')
      }
      console.log(uploadData)
      if(title == 'add') this.onUploadaddCircuit(uploadData)
      if(title == 'update') this.onUploadUpdateCircuit(uploadData)
    })

    const uploadData = {
      ...oldData,
      ...newData,
      date_in_service : this.datePipe.transform(newData.date_in_service, 'yyyy-MM-dd')
    }

    if(title == 'add' && !image) this.onUploadaddCircuit(uploadData)
    if(title == 'update' && !image) this.onUploadUpdateCircuit(uploadData)
  }

  onUploadaddCircuit(data) {
    this.circuitService.addPipingCircuits(data)
    .subscribe(
      () => this.ngOnInit(),
      () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
      () => this.toastrService.success('Data has been added.', 'Your request success.')
    )
  }

  onUploadUpdateCircuit(data) {
    this.circuitService.updatePipingCircuits(data)
    .subscribe(
      () => this.ngOnInit(),
      () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
      () => this.toastrService.success('Data has been added.', 'Your request success.')
    )
  }

  deleteCircuit(data) {
    this.dialogService.open(DeleteDialogComponent, {
      context: {
        dialogData : {
          title: 'Add Circuit',
          name : data.piping_circuit_name,
          id : data.id
        }
      },
    })
    .onClose
    .subscribe(newData => {
      if(!newData) return
      this.circuitService.deletePipingCircuits(newData.id)
      .subscribe(
        () => this.ngOnInit(),
        () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
        () => this.toastrService.success('Data has been added.', 'Your request success.')
      )
    });
  }
}
