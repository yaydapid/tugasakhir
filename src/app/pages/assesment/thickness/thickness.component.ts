import { Component, OnInit, ViewChild } from '@angular/core';
import { ThicknessService } from './thickness-service';
import { Variables } from '../../../component/common-variable';
import { ThicknessPDF } from './pdf-thickness/thickness-pdf';
import { MatTableComponent } from '../../../component/mat-table/mat-table.component';

@Component({
  selector: 'ngx-thickness',
  templateUrl: './thickness.component.html',
})
export class ThicknessComponent implements OnInit {

  constructor (
    private thicknessService : ThicknessService,
    private variables : Variables,
  ) {}

  ngOnInit(): void {
    this.thicknessService.getDataThickness()
    .subscribe(({data} : any) => {
      this.tableData = data.map(asset => {
        const { 
          reading, 
          min_required_thickness, 
          lt_cr, st_cr, 
          remaining_life, 
          half_life, 
          retirement_date, 
          next_tm_insp_date, 
          next_ve_insp_date, 
          mawp,
          max_design_pressure
        } = this.variables.getThicknessCalculation(asset)

        // console.log(min_required_thickness)

        const mawp_color = mawp < max_design_pressure ? 'red' : 'black';

        return {
          ...asset,
          reading : reading.toFixed(3),
          t_min : min_required_thickness.toFixed(3),
          lt_cr : lt_cr.toFixed(3),
          st_cr : st_cr.toFixed(3),
          remaining_life : remaining_life.toFixed(2),
          half_life : half_life.toFixed(2),
          retirement_date,
          next_tm_insp_date,
          next_ve_insp_date,
          mawp : mawp.toFixed(2),
          mawp_color
        }
      })
    })
  }

  @ViewChild(MatTableComponent) viewTable : MatTableComponent;
  @ViewChild(ThicknessPDF) pdfThickness: ThicknessPDF;

  tableHeader = { 
    title : 'Thickness', 
    filter : [
      { name : "MAWP", value : ["No Filter", "Normal", "Abnormal"], title : 'sort-mawp', selection : 'No Filter' } 
    ]
  }

  tableData:any[] = []
  columnDetails = [ 
    { type : 'navto', prop : 'piping_id', head : 'Piping ID', width : '200px', nav : '/pages/cml/' },
    { type : 'text', prop : 'reading', head : 'Reading (mm)', width : '200px' },
    { type : 'text', prop : 't_min', head : 'T min (mm)', width : '200px' },
    { type : 'text', prop : 'lt_cr', head : 'LT CR (mm/Year)', width : '200px' },
    { type : 'text', prop : 'st_cr', head : 'ST CR (mm/Year)', width : '200px' },
    { type : 'text', prop : 'remaining_life', head : 'Remaining Life (Year)', width : '200px' },
    { type : 'text', prop : 'half_life', head : 'Half Life (Year)', width : '200px' },
    { type : 'text', prop : 'retirement_date', head : 'Retirement Date', width : '200px' },
    { type : 'text', prop : 'next_tm_insp_date', head : 'Next TM Insp Date', width : '200px' },
    { type : 'text', prop : 'next_ve_insp_date', head : 'Next VE Insp Date', width : '200px' },
    { type : 'text', prop : 'mawp', head : 'MAWP (psi)', width : '200px', color : 'mawp_color' },
  ]

  onClickTable(data, title) {
    if(title == "sort-mawp") {
      if(data == "No Filter") 
      return this.viewTable.regenerateTable(this.tableData)
      
      const tableData = this.variables.sortByMawp(this.tableData, data)
      this.viewTable.regenerateTable(tableData)
    }
  }
}
