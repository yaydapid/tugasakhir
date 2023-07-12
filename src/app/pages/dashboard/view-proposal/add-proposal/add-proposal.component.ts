import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { PipingCircuitService } from '../../piping-circuits/piping-circuits.service';

@Component({
  selector: 'ngx-add-proposal',
  templateUrl: './add-proposal.component.html',
})
export class AddProposalComponent implements OnInit {

  constructor(
    private circuitService : PipingCircuitService,
    private toastr : NbToastrService,
    private dialog: NbDialogRef<any>,
  ) { }

  ngOnInit(): void {
    this.circuitService.getPipingCircuits()
    .subscribe(({data : circuitData} : any) => {
      this.circuitData = circuitData
    })
  }

  @Input() dialogData;

  selectionCircuit = 0;
  selectionPipe;
  selectionTechnique
  selectionMethod = 0;
  inspectionMethodList : any = [];
  activeMethod

  circuitData
  choosenPipe = []

  selectCircuit(index) {
    this.selectionPipe = null;
    this.selectionCircuit = index; 
  }

  selectPipe(index, pipe) {
    this.selectionPipe = index; 
    if(!this.choosenPipe.includes(pipe))
    this.choosenPipe.push(pipe)
  }

  selectMethod(index) {
    if(!this.inspectionMethodList.length)
    return this.toastr.danger('Please input inspection type first.', 'Selection denied.')

    this.selectionTechnique = null;
    this.selectionMethod = index;
    this.inspectionMethodList[this.activeMethod]["method"] = 
    this.inspectionMethod[this.selectionMethod].name;
  }

  selectTechnique(index, value) {
    if(!this.inspectionMethodList.length)
    return this.toastr.danger('Please input inspection type first.', 'Selection denied.')

    this.selectionTechnique = index;
    this.inspectionMethodList[this.activeMethod]["method"] = 
    this.inspectionMethod[this.selectionMethod].name;
    this.inspectionMethodList[this.activeMethod]["technique"] = value;
  }

  selectInspectionType(value) {
    this.inspectionMethodList = this.inspectionMethodList.map(item => ({...item, active : false}))
    this.inspectionMethodList.push({type : value, active : true, coverage : 0})
    this.activeMethod = this.inspectionMethodList.length - 1
  }

  activationMethod(index){
    this.inspectionMethodList = this.inspectionMethodList.map(item => ({...item, active : false}))
    this.inspectionMethodList[index].active = true; 
    this.activeMethod = index
  }

  deleteMethod(index) {
    this.inspectionMethodList[index] = null;
    this.inspectionMethodList = this.inspectionMethodList.filter(method => method != null)
    
    if(index == this.inspectionMethodList.length)
    this.activationMethod(index - 1)
  }

  inspectionMethod = [
    {name : "Acoustic Emission", children : [
      { name : "Crack Detection" },
      { name : "Leak Detection" },
    ]},
    {name : "Eddy Current", children : [
      { name : "ACFM" },
      { name : "Low Frequency" },
      { name : "Pulsed" },
      { name : "Remote Field" },
      { name : "Standard (flat coil)" },
    ]},
    {name : "Magnetic", children : [
      { name : "Magnetic Fluorescent Inspection" },
      { name : "Magnetic Flux Leakage" },
      { name : "Magnetic Particle Inspection" },
    ]},
    {name : "Metallurgical", children : [
      { name : "Hardness Surveys" },
      { name : "Microstructure Replication" },
    ]},
    {name : "Monitoring", children : [
      { name : "On-line Monitoring" }
    ]},
    {name : "Penetrant", children : [
      { name : "Liquid Penetrant Inspection" },
      { name : "Penetrant Leak Inspection" }
    ]},
    {name : "Radiography", children : [
      { name : "Compton Scatter" },
      { name : "Gamma Radiography" },
      { name : "Real-time Radiography" },
      { name : "X-Radiography" },
    ]},
    {name : "Thermography", children : [
      { name : "Passive Thermography" },
      { name : "Transient Thermography" },
    ]},
    {name : "Ultrasonic", children : [
      { name : "Advanced Ultrasonic Backscatter Technique" },
      { name : "Angled Compression Wave" },
      { name : "Angled Shear Wave" },
      { name : "A-scan Thickness Survey" },
      { name : "B-Scan" },
      { name : "Chime" },
      { name : "C-Scan" },
      { name : "Digital Ultrasonic Thickness Gauge" },
      { name : "Internal Rotational Inspection System" },
      { name : "Lorus" },
      { name : "Surface Waves" },
      { name : "Teletest" },
      { name : "TOFD" },
    ]},
    {name : "Visual", children : [
      { name : "Endoscopy" },
      { name : "Holiday Test" },
      { name : "Hydrotesting" },
      { name : "Naked Eye" },
      { name : "Video" },
    ]},
  ]

  closeDialog(arr = null) {
    if(!arr) this.dialog.close()
    if(arr) {
      arr = {
        ...arr,
        list_of_piping_id : this.choosenPipe.map(item => item.id),
        inspection_method : this.inspectionMethodList
      }
      this.dialog.close(arr)
    }
  }
}
