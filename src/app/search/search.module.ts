import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from "./search.routing";
import { TmdbService } from "../tracker/services/tmdb.service";
import { SearchComponent } from './search/search.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
  SearchComponent,
  SearchPageComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  exports : [],
  providers : [
    TmdbService
  ]
})
export class SearchModule { }
