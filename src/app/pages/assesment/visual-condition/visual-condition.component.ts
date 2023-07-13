import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { VisualConditionService } from "./visual-condition.service";
import { NbToastrService } from "@nebular/theme";
import { ThicknessPDF } from '../thickness/pdf-thickness/thickness-pdf';
import { VisualConditionsPDF } from "./pdf-visual-conditions/visual-conditions-pdf";
import { Variables } from "../../../component/common-variable";


@Component({
  selector: 'ngx-visual-condition',
  templateUrl: './visual-condition.component.html',
})
export class VisualConditionComponent implements OnInit {
  constructor(
    private visualConditionService : VisualConditionService,
    private toastrService : NbToastrService,
    private variables : Variables
  ) {}

  @ViewChild(ThicknessPDF) pdfThickness: ThicknessPDF;
  
  ngOnInit(): void {
    this.visualConditionService.getVisualConditions()
    .subscribe(({data} : any) => {
      const tableData = data.map(item  => {
        const { 
          general_condition, 
          leaks_condition, 
          misalignment_condition, 
          vibration_condition, 
          corrosion_condition, 
          supports_condition,
          insulation_condition
        } = item;

        const point_sort = [general_condition, leaks_condition, misalignment_condition, vibration_condition, corrosion_condition, supports_condition, insulation_condition]
        .map(i => this.variables.visualToPoint(i))
        .reduce((x, y) => x + y, 0) / 7

        return {
          ...item.piping,
          visual_condition : {...item, piping : null},
          visual_sort : this.variables.visualToLevel(Math.round(point_sort))
        }
      })

      this.tableData = tableData
      this.selectionData = this.selectionData ?? tableData[0];

      this.dataSource = new MatTableDataSource(tableData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  
  filterByConditions(val) {
    let tableData;
    if(val == 'No Filter') tableData = this.tableData
    if(val == 'Excellent') tableData = this.tableData.filter(i => i.visual_sort == 'Excellent')
    if(val == 'Good') tableData = this.tableData.filter(i => i.visual_sort == 'Good')
    if(val == 'Average') tableData = this.tableData.filter(i => i.visual_sort == 'Average')
    if(val == 'Below Average') tableData = this.tableData.filter(i => i.visual_sort == 'Below Average')
    if(val == 'Poor') tableData = this.tableData.filter(i => i.visual_sort == 'Poor')
    this.dataSource = new MatTableDataSource(tableData);
  }

  tableData
  dataSource 
  displayedColumns: string[] = ['piping_id'];
  resultsLength = 0;
  selectionData : any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(VisualConditionsPDF) visualPDF: VisualConditionsPDF;

  showData(element) {
      this.selectionData = element
  }

  onSubmit(data) {
    const id = this.selectionData.visual_condition.id
    this.visualConditionService.updateVisualConditions(data, id)
    .subscribe(
      (res) => this.ngOnInit(),
      () => this.toastrService.danger('Please input all conditions field.', 'Your request failed.'),
      () => this.toastrService.success('Data has been updated.', 'Your request success.')
    )
  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
  }

  externalCheckList = [
    { 
      title : "Leaks" , 
      conditions : {
        title : "Leaks",
        props : 'leaks_condition'
      }, 
      comment : {
        title : 'Leaks Comment',
        props : 'leaks_comment'
      },
      source : [ 
        { title : "Process", props : 'leaks_process'}, 
        { title : "Steam Tracing", props : 'leaks_steam_tracing'}, 
        { title : "Existing Clamp", props : 'leaks_existing_clamps' }, 
      ] 
    },
    { 
      title : "Misalignment" , 
      conditions : {
        title : "Misalignment",
        props : 'misalignment_condition'
      }, 
      comment : {
        title : 'Misalignment Comment',
        props : 'misalignment_comment'
      },
      source : 
      [ 
        { title : "Piping Misalignment", props : 'misalignment_piping_misalignment' }, 
        { title : "Expansion Joint Misalignment", props : 'misalignment_expainsion_joint' }, 
      ] 
    },
    { 
      title : "Vibration" , 
      conditions : {
        title : "Vibration",
        props : 'vibration_condition'
      }, 
      comment : {
        title : 'Vibration Comment',
        props : 'vibration_comment'
      },
      source : 
      [ 
        { title : 'Excessive Overhung Weight', props : 'vibration_excessive_overhung'},
        { title : 'Inadequate Support', props : 'vibration_inadequate_support'},
        { title : 'Thin, Small-bore, or Alloy Piping', props : 'vibration_thin_small'},
        { title : 'Threaded Connections', props : 'vibration_threaded_connections'},
        { title : 'Loose Support Causing Metal Wear', props : 'vibration_loose_support'},
      ] 
    },
    { 
      title : "Corrosion" , 
      conditions : {
        title : "Corrosion",
        props : 'corrosion_condition'
      }, 
      comment : {
        title : 'Corrosion Comment',
        props : 'corrosion_comment'
      },
      source : 
      [ 
        { title : 'Bolting Support Points Under Clamps', props : 'corrosion_bolting_support'},
        { title : 'Coating/Painting Deterioration', props : 'corrosion_coating_painting'},
        { title : 'Soil-to-air Interfaces', props : 'corrosion_soil_to_air'},
        { title : 'Insulation Interfaces', props : 'corrosion_insulation_interface'},
        { title : 'Bilogical Growth', props : 'corrosion_biological_growth'},
      ] 
    },
    { 
      title : "Supports" , 
      conditions : {
        title : "Supports",
        props : 'supports_condition'
      }, 
      comment : {
        title : 'Support Comment',
        props : 'supports_comment'
      },
      source : 
      [ 
        { title : 'Shoes Off Supports', props : 'supports_shoes_supports' },
        { title : 'Hanger Distortion of Breakage', props : 'supports_hanger_distortion' },
        { title : 'Bottomed Out Springs', props : 'supports_bottomed_out' },
        { title : 'Brace Distorsion/Breakage', props : 'supports_brace_distortion' },
        { title : 'Loose Brackets', props : 'supports_loose_brackets' },
        { title : 'Slides Plates/Rollers', props : 'supports_slides_plates' },
        { title : 'Counter Balance Condition', props : 'supports_counter_balance' },
        { title : 'Support Corrosion', props : 'supports_support_corrosion' },
      ] 
    },
    { 
      title : "Insulation" , 
      conditions : {
        title : "Insulation",
        props : 'insulation_condition'
      }, 
      comment : {
        title : 'Insulation Comment',
        props : 'insulation_comment'
      },
      source : 
      [ 
        { title : 'Damage/Penetrations', props : 'insulation_damage_penetrations' },
        { title : 'Missing Jacketing Insulation', props : 'insulation_missing_jacketing' },
        { title : 'Sealing Deterioration', props : 'insulation_sealing_deterioration' },
        { title : 'Bulging', props : 'insulation_bulging' },
        { title : 'Banding (Broken/Missing)', props : 'insulation_banding' },
      ] 
    },
  ]

}
