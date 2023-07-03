import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { ProfileRoutingModule } from "./profile.routing";
import { ProfileComponent } from "./profile.component";
import { NbButtonModule, NbCardModule, NbInputModule } from "@nebular/theme";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        ProfileRoutingModule,
        NbCardModule,
        NbButtonModule,
        NbInputModule,
        FormsModule
    ],
    declarations: [
        ProfileComponent
    ],
  })
export class ProfileModule { }