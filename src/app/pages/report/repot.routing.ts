import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportComponent } from "./report.component";
import { ReportPipingAssets } from "./piping-assets/report-piping-assets";
import { ReportPipingCircuit } from "./piping-circuits/report-piping-circuit";

const routes: Routes = [{
    path: '',
    component: ReportComponent,
    children: [
      {
        path: 'piping-assets',
        component : ReportPipingAssets
      },
      {
        path: 'piping-circuits',
        component : ReportPipingCircuit
      },
    ],
}];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReportRoutingModule { }