import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CorrosionRateTrendComponent } from "./corrosion-rate-trend/corrosion-rate-trend.component";
import { RemainingLifeTrendComponent } from "./remaining-life-trend/remaining-life-trend.component";
import { AssesmentComponent } from "../assesment/assesment.component";

const routes: Routes = [{
    path: '',
    component: AssesmentComponent,
    children: [
      {
        path: 'corrosion-rate-trend',
        component : CorrosionRateTrendComponent
      },
      {
        path: 'remaining-life-trend',
        component : RemainingLifeTrendComponent
      },
    ],
  }];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AnalyticsRoutingModule { }