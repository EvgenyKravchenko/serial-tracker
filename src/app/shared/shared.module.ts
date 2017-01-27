import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialListComponent } from "./serial-list/serial-list.component";
import { SerialListItemComponent } from "./serial-list-item/serial-list-item.component";
import { SerialService } from "./services/serial.service";
import { TmdbService } from "./services/tmdb.service";
import { RouterModule } from "@angular/router";
import { SerialInfoComponent } from "./serial-info/serial-info.component";
import { MdChipsModule, MdIconModule, MdButtonModule } from "@angular/material";
import { AuthService } from "./services/auth.service";
import { SerialActionsComponent } from './serial-actions/serial-actions.component';
import { SerialTitleComponent } from './serial-title/serial-title.component';

const MATERIAL_MODULES: any[] = [
  MdChipsModule.forRoot(),
  MdIconModule.forRoot(),
  MdButtonModule.forRoot()
];

@NgModule({
  declarations: [
    SerialListComponent,
    SerialListItemComponent,
    SerialInfoComponent,
    SerialActionsComponent,
    SerialTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...MATERIAL_MODULES
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
