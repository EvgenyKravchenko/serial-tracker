import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./shared/services/auth-guard.service";

export const routes: Routes = [
  { path: '', redirectTo: 'tracker', pathMatch: 'full' },
  { path: 'tracker', loadChildren: 'app/tracker/tracker.module#TrackerModule', canActivate: [AuthGuard] },
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule' }
];

export const routing = RouterModule.forRoot(routes);
