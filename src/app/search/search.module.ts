import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from "./search.routing";
import { SearchComponent } from './search/search.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
  SearchComponent,
  SearchPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ],
  exports : [],
  providers : []
})
export class SearchModule { }
