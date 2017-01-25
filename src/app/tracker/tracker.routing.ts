import { NgModule }            from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackerComponent } from "./tracker/tracker.component";
import { SerialsPageComponent } from "./serials-page/serials-page.component";

const routes: Routes = [
  {
    path: '',
    component: TrackerComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: SerialsPageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackerRoutingModule {}
