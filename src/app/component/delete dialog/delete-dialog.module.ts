import { NgModule } from "@angular/core";
import { DeleteDialogComponent } from "./delete-dialog.component";
import { CommonModule } from "@angular/common";
import { NbDialogModule } from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";

@NgModule({ 
    imports : [
        CommonModule,
        ThemeModule,
        NbDialogModule.forChild({
            closeOnBackdropClick : true
        }),
    ],
    declarations : [
        DeleteDialogComponent
    ],
    exports : [
        DeleteDialogComponent
    ],
})

export class DeleteDialogModule {}