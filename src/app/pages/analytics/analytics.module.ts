import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../@theme/theme.module";
import { NbCardModule, NbMenuModule, NbSelectModule } from "@nebular/theme";
import { NgModule } from "@angular/core";
import { AnalyticsComponent } from "./analytics.component";
import { AnalyticsRoutingModule } from "./analytics.routing";
import { CorrosionRateTrendComponent } from './corrosion-rate-trend/corrosion-rate-trend.component';
import { RemainingLifeTrendComponent } from './remaining-life-trend/remaining-life-trend.component';
import { RemainingChartComponent } from "./corrosion-rate-trend/chart/remaining-chart.component";
import { ThicknessChartComponent } from "./corrosion-rate-trend/chart/thickness-chart.component";
import { MaterialTableModule } from "../../component/mat-table/mat-table.module";
import { CorrosionRChartComponent } from "./corrosion-rate-trend/chart/corrosionR-chart.component";
import { MatTableModule } from "@angular/material/table";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { PipingCircuitsComponent } from "../dashboard/piping-circuits/piping-circuits.component";
import { PipingCircuitChartComponent } from "./remaining-life-trend/chart/piping-circuit-chart.component";

@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        NbMenuModule,
        NbSelectModule,
        AnalyticsRoutingModule,
        NbCardModule,
        MaterialTableModule,
        MatTableModule, 
        MatSlideToggleModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatFormFieldModule, 
        MatInputModule,
        MatSelectModule,
    ],
    declarations: [
        AnalyticsComponent,
        CorrosionRateTrendComponent,
        RemainingLifeTrendComponent,
        ThicknessChartComponent,
        RemainingChartComponent,
        CorrosionRChartComponent,
        PipingCircuitChartComponent
    ],
  })
export class AnalyticsModule { }