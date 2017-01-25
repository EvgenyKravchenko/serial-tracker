import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tracker', pathMatch: 'full' },
  { path: 'tracker', loadChildren: 'app/tracker/tracker.module#TrackerModule' }
];

export const routing = RouterModule.forRoot(routes);
