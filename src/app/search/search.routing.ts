import { NgModule }            from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from "./search-page/search-page.component";
import { SearchComponent } from "./search/search.component";
import { SerialInfoComponent } from "../shared/serial-info/serial-info.component";

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      { path: '', redirectTo: 'find', pathMatch: 'full' },
      { path: 'find', component: SearchPageComponent },
      { path: 'find/:id', component: SerialInfoComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
