import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../@theme/theme.module";
import { NgModule } from "@angular/core";
import { TopBarComponent } from "./top-bar.component";
import { 
    NbButtonModule, 
    NbCardModule, 
    NbDialogModule, 
    NbIconModule
} from "@nebular/theme";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";
import { PrintQRCodeComponent } from "./qr-code/qr-code.dialog";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        NbCardModule,
        NbButtonModule,
        NbIconModule,
        NgxQRCodeModule,
        NbDialogModule.forChild({
            closeOnBackdropClick : true
        })
    ],
    declarations: [
        TopBarComponent,
        PrintQRCodeComponent
    ],
    exports : [
        TopBarComponent
    ]
  })
export class TopBarModule { }