import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NopageFoundComponent } from './components/shared/nopage-found/nopage-found.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: NopageFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
