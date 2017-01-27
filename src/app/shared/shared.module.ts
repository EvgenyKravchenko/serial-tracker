import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialListComponent } from "./serial-list/serial-list.component";
import { SerialListItemComponent } from "./serial-list-item/serial-list-item.component";
import { SerialService } from "./services/serial.service";
import { TmdbService } from "./services/tmdb.service";
import { RouterModule } from "@angular/router";
import { SerialInfoComponent } from "./serial-info/serial-info.component";
import { MdChipsModule } from "@angular/material";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    SerialListComponent,
    SerialListItemComponent,
    SerialInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MdChipsModule.forRoot()
  ],
  exports : [
    SerialListComponent,
    SerialListItemComponent,
    SerialInfoComponent
  ],
  providers : [
    SerialService,
    TmdbService,
    AuthService
  ]
})
export class SharedModule { }
