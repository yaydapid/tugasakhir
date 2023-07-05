import { Component, OnInit } from '@angular/core';
import { ThicknessService } from './thickness-service';
import { Variables } from '../../../component/common-variable';
import moment from 'moment';
import { DatePipe } from '@angular/common';

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
        const { class : assetClass, allowable_unit_stress, longtd_quality_factor, outside_diameter } = asset;
        const { min_required_thickness } = this.variables.getAssetsFormula(asset);
        const { reading, lt_cr, st_cr, last_cml_reading_date : lcrd } = this.variables.getAverageCML(asset);
        const remaining_life = lt_cr ?? (reading - min_required_thickness) / lt_cr;
        const half_life = remaining_life / 2;
        const { tm_inspection_interval } = this.variables.getInspectionInt(assetClass)
 
        let retirement_date = lcrd 
        ? this.variables.addMonths(lcrd, remaining_life * 12)
        : 'Undefined';

        let next_tm_insp_date = 
        st_cr < half_life 
        ? this.variables.addMonths(lcrd, st_cr * 12) 
        : this.variables.addMonths(lcrd, half_life * 12) 

        let next_ve_insp_date =
        tm_inspection_interval < half_life
        ? this.variables.addMonths(lcrd, tm_inspection_interval * 12) 
        : this.variables.addMonths(lcrd, half_life * 12) 

        if(!lcrd) retirement_date = next_tm_insp_date = next_ve_insp_date = 'Undefined'

        const tmawp = reading - ( tm_inspection_interval * st_cr);
        const mawp = (2 * allowable_unit_stress * longtd_quality_factor * tmawp) / outside_diameter
        return {
          ...asset,
          reading : reading.toFixed(4),
          t_min : min_required_thickness.toFixed(4),
          lt_cr : lt_cr.toFixed(4),
          st_cr : st_cr.toFixed(4),
          remaining_life : remaining_life.toFixed(4),
          half_life : half_life.toFixed(4),
          retirement_date,
          next_tm_insp_date,
          next_ve_insp_date,
          mawp : mawp.toFixed(4)
        }
      })
    })
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
    { type : 'text', prop : 'mawp', head : 'MAWP (psi)', width : '200px' },
  ]
}
