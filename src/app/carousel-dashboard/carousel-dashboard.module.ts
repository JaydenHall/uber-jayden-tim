import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CarouselDashboardComponent } from "./carousel-dashboard.component";

@NgModule({
    declarations: [
        CarouselDashboardComponent
    ],
    imports: [
        CommonModule,
        NgbModule
    ],
    exports: [
        CarouselDashboardComponent,
    ]
})

export class CarouselDashboardModule {}