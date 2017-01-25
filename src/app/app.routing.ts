import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tracker', pathMatch: 'full' },
  { path: 'tracker', loadChildren: 'app/tracker/tracker.module#TrackerModule' },
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule' }
];

export const routing = RouterModule.forRoot(routes);
