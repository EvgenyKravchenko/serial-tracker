import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerRoutingModule } from "./tracker.routing";
import { TrackerComponent } from './tracker/tracker.component';
import { SerialsPageComponent } from './serials-page/serials-page.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    TrackerComponent,
    SerialsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TrackerRoutingModule
  ],
  exports : [],
  providers : []
})
export class TrackerModule { }
