import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from "./search.routing";
import { SearchComponent } from './search/search.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SharedModule } from "../shared/shared.module";
import { SearchListComponent } from './search-list/search-list.component';
import { MdInputModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { SerialInfoComponent } from '../shared/serial-info/serial-info.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchPageComponent,
    SearchListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SearchRoutingModule,
    MdInputModule.forRoot()
  ],
  exports : [],
  providers : []
})
export class SearchModule { }
