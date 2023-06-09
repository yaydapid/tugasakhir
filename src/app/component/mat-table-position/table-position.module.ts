import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { TablePositionComponent } from "./table-position.component";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
    ],
    declarations: [
        TablePositionComponent
    ],
    exports : [
        TablePositionComponent
    ]
  })
export class TablePositionModule { }