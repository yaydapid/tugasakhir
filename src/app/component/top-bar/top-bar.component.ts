import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PrintQRCodeComponent } from './qr-code/qr-code.dialog';
import { ActivatedRoute } from '@angular/router';
import { PipingAssetsComponent } from '../../pages/dashboard/piping-assets/piping-assets.component';
import { PipingCircuitsComponent } from '../../pages/dashboard/piping-circuits/piping-circuits.component';
import { ViewProposalComponent } from '../../pages/dashboard/view-proposal/view-proposal.component';
import { CmlComponent } from '../../pages/cml/cml.component';

@Component({
  selector: 'ngx-top-bar',
  templateUrl: './top-bar.component.html' ,
})
export class TopBarComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService,
    private activeRoute : ActivatedRoute,
    private assetComponent : PipingAssetsComponent,
    private circuitComponent : PipingCircuitsComponent,
    private proposalComponent : ViewProposalComponent,
    private cmlComponent : CmlComponent
  ) { }

  ngOnInit(): void {}

  addNew() {
    const route : any = this.activeRoute.snapshot.data?.routename 
    || this.activeRoute.snapshot.firstChild.data.routename

    if(route == 'assets')
    this.assetComponent.addAssets()
    
    if(route == 'circuit')
    this.circuitComponent.addCircuit()

    if(route == 'proposal')
    this.proposalComponent.addProposal()

    if(route == 'cml')
    this.cmlComponent.addCML();
  }

  import() {
    console.log('import')
  }

  export() {
    console.log('export')
  }

  print() {
    console.log('print')
  }

  qrPrint() {
    this.dialogService.open(PrintQRCodeComponent);
  }

}
