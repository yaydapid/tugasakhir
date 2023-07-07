import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../@theme/theme.module";
import { NgModule } from "@angular/core";
import { CmlComponent } from "./cml.component";
import { CMLRoutingModule } from "./cml-routing.module";
import { TopBarModule } from "../../component/top-bar/top-bar.module";
import { MaterialTableModule } from "../../component/mat-table/mat-table.module";
import { AddCMLComponent } from "./add-cml/add-cml.component";
import { NbButtonModule, NbGlobalPhysicalPosition,  NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbToastrModule } from "@nebular/theme";
import { FormsModule } from "@angular/forms";
import { CMLPDF } from "./pdf-assesment/cml-pdf";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        CMLRoutingModule,
        NbCardModule,
        NbIconModule,
        NbInputModule,
        NbButtonModule,
        TopBarModule,
        MaterialTableModule,
        FormsModule,
        NbDatepickerModule,
        NbToastrModule.forRoot({
            destroyByClick	: true,
            duration : 3000,
            position : NbGlobalPhysicalPosition.BOTTOM_RIGHT,
            preventDuplicates : true,
            limit : 3
        }),
    ],
    declarations: [
        CmlComponent,
        AddCMLComponent,
        CMLPDF
    ],
  })
export class CMLModule { }