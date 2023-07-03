import { Component, OnInit } from '@angular/core';
import { PipingAssetsService } from '../../dashboard/piping-assets/piping-assets.service';
import { CMLService } from '../../cml/cml.servivce';

@Component({
  selector: 'ngx-thickness',
  templateUrl: './thickness.component.html',
})
export class ThicknessComponent implements OnInit {

  constructor (
    private assetsService : PipingAssetsService,
    private cmlService : CMLService,
  ) {}

  ngOnInit(): void {
    let averageOfCML = {}
    this.assetsService.getPipingAssets()
    .subscribe(({data} : any)  => {

      this.cmlService.getCMLs() 
      .subscribe(({data : dataCML} : any) => {
        dataCML.forEach(item => {
          const {piping_id, last_thickness_reading_date} = item
          let cml = averageOfCML[piping_id]
          if(!cml)
          cml = {
            ...item, 
            total : 0,
            last_thickness_reading : 0,
            last_thickness_reading_date
          };

          if(cml) {
            cml['total']++;
            cml['last_thickness_reading'] += item.last_thickness_reading;
            if(new Date(last_thickness_reading_date) > new Date(cml['last_thickness_reading_date'])) {}
          }

          averageOfCML[piping_id] = cml
        });

        this.tableData = data.map(item => {
          const {min_alert_thickness, min_structural_thickness, 
            piping_id, pressure_design_thickness, min_required_thickness,
          class : classes, allowable_unit_stress, longtd_quality_factor, outside_diameter,
        corrosion_allowance, mechanical_allowance} = item;

          let tm_inspection_interval, ve_inspection_interval;

          switch(classes) {
            case "1":
              tm_inspection_interval = 5
              ve_inspection_interval = 5
            break;
            case "2":
              tm_inspection_interval = 10
              ve_inspection_interval = 5
            break;
            case "3":
              tm_inspection_interval = 10
              ve_inspection_interval = 5
            break;
            case "4":
            break;
          }

          const { last_thickness_reading, total, calculated_cr } = averageOfCML[piping_id] ?? 0;

          const t_min = Math.max(pressure_design_thickness, min_alert_thickness, min_structural_thickness) +
          corrosion_allowance + mechanical_allowance
          const reading = total ? last_thickness_reading / total : 0
          const lt_cr = total ? calculated_cr / total : 0
          const st_cr = 0.222
          const remaining_life = lt_cr ? (reading - min_required_thickness) / lt_cr : 0
          const half_life = remaining_life / 2  
          const retirement_date = remaining_life * 12;
          const tMawp = reading - tm_inspection_interval * lt_cr
          const mawp = 2 * allowable_unit_stress * longtd_quality_factor * tMawp / outside_diameter

          return {
            ...item,
            t_min,
            reading : reading.toFixed(3),
            lt_cr : lt_cr.toFixed(3),
            st_cr : st_cr.toFixed(3),
            remaining_life : remaining_life.toFixed(3),
            half_life : half_life.toFixed(3),
            retirement_date,
            next_tm_insp_date : "8",
            next_ve_insp_date : "9",
            mawp,
          }
        })

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
