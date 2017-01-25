import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerRoutingModule } from "./tracker.routing";
import { TrackerComponent } from './tracker/tracker.component';
import { SerialsPageComponent } from './serials-page/serials-page.component';
import { SerialListComponent } from './serial-list/serial-list.component';
import { SerialListItemComponent } from './serial-list-item/serial-list-item.component';
import { SerialService } from "./services/serial.service";

@NgModule({
  declarations: [
    TrackerComponent,
    SerialsPageComponent,
    SerialListComponent,
    SerialListItemComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule
  ],
  exports : [],
  providers : [SerialService]
})
export class TrackerModule { }
