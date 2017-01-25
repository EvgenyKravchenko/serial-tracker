import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerRoutingModule } from "./tracker.routing";
import { TrackerComponent } from './tracker/tracker.component';
import { SerialsPageComponent } from './serials-page/serials-page.component';

@NgModule({
  declarations: [
    TrackerComponent,
    SerialsPageComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule
  ],
  exports : [],
  providers : []
})
export class TrackerModule { }
