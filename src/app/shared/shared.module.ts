import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialListComponent } from "./serial-list/serial-list.component";
import { SerialListItemComponent } from "./serial-list-item/serial-list-item.component";
import { SerialService } from "./services/serial.service";
import { TmdbService } from "./services/tmdb.service";

@NgModule({
  declarations: [
    SerialListComponent,
    SerialListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SerialListComponent,
    SerialListItemComponent
  ],
  providers : [
    SerialService,
    TmdbService
  ]
})
export class SharedModule { }
