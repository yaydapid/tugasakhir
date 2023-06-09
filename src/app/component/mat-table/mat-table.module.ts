import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../@theme/theme.module";
import { NgModule } from "@angular/core";
import { MatTableComponent } from "./mat-table.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { 
    NbAccordionModule, 
    NbCardModule, 
    NbCheckboxModule, 
    NbInputModule, 
    NbListModule, 
    NbOptionModule, 
    NbSelectModule 
} from "@nebular/theme";
import { FormsModule } from "@angular/forms";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        MatSlideToggleModule,
        MatTableModule, 
        MatCheckboxModule,
        MatPaginatorModule,
        MatFormFieldModule, 
        MatInputModule,
        MatSelectModule,
        NbOptionModule,
        NbSelectModule,
        NbCardModule,
        NbAccordionModule,
        NbInputModule,
        FormsModule,
        NgxQRCodeModule,
        NbSelectModule,
        NbOptionModule,
        NbListModule,
        NbCheckboxModule
    ],
    declarations: [
        MatTableComponent,
    ],
    exports : [
        MatTableComponent
    ]
  })
export class MaterialTableModule { }