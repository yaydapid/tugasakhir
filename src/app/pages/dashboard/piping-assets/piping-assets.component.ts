import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { PipingAssetsService } from './piping-assets.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { DeleteDialogComponent } from '../../../component/delete dialog/delete-dialog.component';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { MatTableComponent } from '../../../component/mat-table/mat-table.component';
import { takeUntil } from 'rxjs/operators';
import { AsyncSubject, Subject } from 'rxjs';
import * as XLSX from 'xlsx/xlsx.mjs';
import * as FileSaver from 'file-saver';
import { PageMenuService } from '../../pages-service';
import 'rxjs/add/observable/forkJoin';
import { DatePipe } from '@angular/common';
import { Variables } from '../../../component/common-variable';
import { PDFAssetsDashboard } from './pdf-assets/pdf-assets-dashboard';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
}) 
@Component({
  selector: 'ngx-piping-assets',
  templateUrl: './piping-assets.component.html',
})
export class PipingAssetsComponent implements OnInit {
  constructor(
    private assetsService : PipingAssetsService,
    private dialogService : NbDialogService,
    private toastrService: NbToastrService,
    private pageMenuService : PageMenuService,
    private datePipe : DatePipe,
    private variables : Variables
  ) {}
  
  @ViewChild(MatTableComponent) viewTable : MatTableComponent;
  @ViewChild(PDFAssetsDashboard) pdfAssets: PDFAssetsDashboard;
  private destroy$: Subject<void> = new Subject<void>();
 
  ngOnInit(): void {
    this.assetsService.getPipingAssets()
    .subscribe(
      ({data} : any)  => {
        this.tableData = data.map(asset => {
          let {tm_inspection_interval, ve_inspection_interval} = asset;
          ({ tm_inspection_interval, ve_inspection_interval } = this.variables.getInspectionInt(asset))
          tm_inspection_interval = tm_inspection_interval ? tm_inspection_interval.toFixed(1) : 0
          ve_inspection_interval = ve_inspection_interval ? ve_inspection_interval.toFixed(1) : 0
          return {
            ...asset,
            tm_inspection_interval,
            ve_inspection_interval,
          }
        })
        this.viewTable.regenerateTable(this.tableData)
      },
      () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
    )
  }

  tableData:any[]
  tableHeader = { 
    title : 'Piping Assets', 
    filter : [
      { name : "Class", value : ["All",1,2,3,4], title : 'class-assets' } 
    ]
  }

  columnDetails = [ 
    { type : 'select', prop : 'select', head : '', width : '20px' },
    { type : 'text', prop : 'piping_id', head : 'Piping Id', width : '100px' },
    { type : 'text', prop : 'piping_name', head : 'Piping Name', width : '200px' },
    { type : 'text', prop : 'date_in_service', head : 'Date In Service', width : '200px' },
    { type : 'text', prop : 'class', head : 'Class', width : '200px' },
    { type : 'text', prop : 'tm_inspection_interval', head : 'TM Inspection Interval', width : '200px' },
    { type : 'text', prop : 've_inspection_interval', head : 'VE Inspection Interval', width : '200px' },
    { type : 'text', prop : 'notes', head : 'Notes', width : '200px' },
    { type : 'button', prop : 'edit', width : '80px', button : [
      { icon : 'edit-outline', status : 'info', title : "edit-assets" },
      { icon : 'trash-2-outline', status : 'danger', title : "delete-assets" },
    ]},
  ]

  onClickTable(data, title) {
    if(title == 'delete-assets') this.deleteAsset(data)
    if(title == 'edit-assets') this.updateAssets(data)
    if(title == 'class-assets') this.filterByClass(data)
    if(title == 'Export To Excel') this.exportExcelFile();
  }

  filterByClass(classes) {
    if(classes == "All") this.viewTable.regenerateTable(this.tableData)
    else {
      const tableData = this.tableData.filter(data => data.class == classes)
      this.viewTable.regenerateTable(tableData)
    }
  }

  private dataSubject = new AsyncSubject<any>();
  uploadImage(image) {
    const formData = new FormData(); 
    formData.append('image', image);
    this.pageMenuService.addImage(formData)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      res => {
      this.dataSubject.next(res);
      this.dataSubject.complete();
    },
    () => this.toastrService.danger('Please check your connection and try again.', 'Failed to upload image.'),
    )
  }

  addAssets() {
    this.dialogService.open(AddAssetsComponent, {
      context: {
        dialogData : {  
          title: 'Add Assets',
        }
      },
    })
    .onClose
    .subscribe(newData => {
      if(!newData) return 
      this.reconstructAssetsData(newData, 'add')
    });
  }
  
  updateAssets(data) {
    this.dialogService.open(AddAssetsComponent, {
      context: {
        dialogData : {  
          title: 'Update Assets',
          data : {
            ...data,
            date_in_service : new Date(data.date_in_service)
          }
        }
      },
    })
    .onClose
    .subscribe(newData => {
      if(!newData) return
      this.reconstructAssetsData(newData, 'update', data)
    });
  }

  reconstructAssetsData(newData, title, oldData = null) {
    const {image} = newData;

    const uploadData = {
      ...oldData,
      ...newData,
      date_in_service : this.datePipe.transform(newData.date_in_service, 'yyyy-MM-dd')
    }

    if(image)
    for(let img of image) this.uploadImage(img)
    this.dataSubject.asObservable()
    .pipe(takeUntil(this.destroy$))
    .subscribe(res => {
      let images = [...oldData?.images ?? []];
      let lastId = res.data.id
      for(let i = lastId; i < lastId + image.length; i++) images.push(i)
      uploadData['images'] = images;
      if(title == 'add') this.onUploadaddAsset(uploadData)
      if(title == 'update') this.onUploadUpdateAsset(uploadData)
    })
    
    if(title == 'add' && !image) this.onUploadaddAsset(uploadData)
    if(title == 'update' && !image) this.onUploadUpdateAsset(uploadData)
  }

  onUploadaddAsset(data) {
    this.assetsService.addPipingAssets(data)
    .subscribe(
      () => this.ngOnInit(),
      () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
      () => this.toastrService.success('Data has been added.', 'Your request success.')
    )
  }

  onUploadUpdateAsset(data) {
    this.assetsService.updatePipingAssets(data)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      () => this.ngOnInit(),
      () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
      () => this.toastrService.success('Data has been updated.', 'Your request success.')
      )
  }

  deleteAsset(data) {
    this.dialogService.open(DeleteDialogComponent, {
      context: {
        dialogData : {
          title : "Delete Assets",
          name : data.piping_name,
          id : data.id
        }
      },
    })
    .onClose
    .subscribe(data => {
      if(data)
      this.assetsService.deletePipingAssets(data.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        () => this.ngOnInit(),
        () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
        () => this.toastrService.success('Data has been delete.', 'Your request success.')
        )
    });
  }

  exportExcelFile() {
    const data = this.viewTable.selectTableRow()
    const worksheet : XLSX.WorkSheet = XLSX.utils.json_to_sheet(data)
    const woorkbook : XLSX.WoorkBook = {Sheets : {'Piping Assets' : worksheet}, SheetNames : ['Piping Assets']}
    const excelBuffer : any = XLSX.write(woorkbook, {bookType : 'xlsx', type : 'array' });
    this.saveAsExcelFile(excelBuffer, 'Assets')
  }

  saveAsExcelFile(buffer : any, excelFileName : string) : void {
    const data : Blob = new Blob([buffer], {type : EXCEL_TYPE});
    FileSaver.saveAs(data, excelFileName + '_PIPING_MONITORING_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  importExcelFile(event) {
    const fileName = event.target.files[0];
    if(!fileName) return;
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(fileName);
    fileReader.onload = (e : any) => { 
      const binaryData = e.target.result;
      const workbook = XLSX.read(binaryData, {type : 'binary'});
      const sheet = workbook.Sheets['Data Assets']
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

  reconstructDataExcel(datas) {
    datas = datas.map(details => {
      let {
          ['Piping ID']                   : piping_id,
          ['Piping Name']                 : piping_name,
          ['NPS']                         : nominal_pipe_size,
          ['Pipe Design Code']            : pipe_design_code,
          ['Schedule']                    : schedule,
          ['Outside Diameter']            : outside_diameter,
          ['Long. Quality Factor']        : longtd_quality_factor,
          ['Weld Joint Factor']           : weld_joint_factor,
          ['Allowable Stress']            : allowable_unit_stress,
          ['Coefficient']                 : coefficient,
          ['Min. Design Pressure']        : min_design_pressure,
          ['Max. Design Pressure']        : max_design_pressure,
          ['Min. Design Temperature']     : min_design_temperature,
          ['Max. Design Temperature']     : max_design_temperature,
          ['Corrosion Allowance']         : corrosion_allowance,
          ['Mechanical Allowance']        : mechanical_allowance,
          ['Min. Structural Thickness']   : min_structural_thickness,
          ['Min. Alert Thickness']        : min_alert_thickness,
          ['Nominal Thickness']           : nominal_thickness,
          ['Date in Service']             : date_in_service,
          ['Notes']                       : notes,
          ['Recomendation']               : recomendation,
          Class
      } = details;

      date_in_service = this.datePipe.transform(this.transformExcelDate(date_in_service), 'yyyy-MM-dd') 

      return {
        piping_id,
        piping_name,
        nominal_pipe_size,
        pipe_design_code,
        schedule,
        outside_diameter,
        longtd_quality_factor,
        weld_joint_factor,
        allowable_unit_stress,
        coefficient,
        min_design_pressure,
        max_design_pressure,
        min_design_temperature,
        max_design_temperature,
        corrosion_allowance,
        mechanical_allowance,
        min_structural_thickness,
        min_alert_thickness,
        nominal_thickness,
        date_in_service,
        notes,
        recomendation,
        class : Class
      }
    })

    this.assetsService.importAsset(datas)
    .subscribe(
      () => this.ngOnInit(),
      () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'),
      () => this.toastrService.success('Data has been delete.', 'Your request success.')
    )
  }

  transformExcelDate = (date) => date == undefined ? '' :new Date(Math.round((date - 25569) * 86400 * 1000))

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
