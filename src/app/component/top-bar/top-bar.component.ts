import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PrintQRCodeComponent } from './qr-code/qr-code.dialog';
import { AddAssetsComponent } from '../../pages/dashboard/piping-assets/add-assets/add-assets.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCircuitComponent } from '../../pages/dashboard/piping-circuits/add-circuit/add-circuit.component';
import { AddProposalComponent } from '../../pages/dashboard/view-proposal/add-proposal/add-proposal.component';
import { AddCMLComponent } from '../../pages/cml/add-cml/add-cml.component';

@Component({
  selector: 'ngx-top-bar',
  templateUrl: './top-bar.component.html' ,
})
export class TopBarComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService,
    private activeRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {

  }

  addNew() {
    const route : any = this.activeRoute.snapshot.data?.routename || this.activeRoute.snapshot.firstChild.data.routename
    console.log(route)

    if(route == 'assets')
    this.dialogService.open(AddAssetsComponent, {
      context: {
        dialogData : 'hello'
        // title: 'This is a title passed to the dialog component',
      },
    });

    if(route == 'circuit')
    this.dialogService.open(AddCircuitComponent, {
      context: {
        dialogData : 'hello'
        // title: 'This is a title passed to the dialog component',
      },
    });

    if(route == 'proposal')
    this.dialogService.open(AddProposalComponent, {
      context: {
        dialogData : 'hello'
        // title: 'This is a title passed to the dialog component',
      },
    });

    if(route == 'cml')
    this.dialogService.open(AddCMLComponent, {
      context: {
        dialogData : 'hello'
        // title: 'This is a title passed to the dialog component',
      },
    });
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
