import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VisualConditionComponent } from "./visual-condition/visual-condition.component";
import { ThicknessComponent } from "./thickness/thickness.component";
import { DemageMechanismComponent } from "./demage-mechanism/demage-mechanism.component";
import { AssesmentComponent } from "./assesment.component";

const routes: Routes = [{
    path: '',
    component: AssesmentComponent,
    children: [
      {
        path: 'visual-condition',
        component : VisualConditionComponent
      },
      {
        path: 'thickness',
        component : ThicknessComponent
      },
      {
        path: 'damage-mechanism',
        component : DemageMechanismComponent
      },
    ],
  }];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AssesmentRoutingModule { }