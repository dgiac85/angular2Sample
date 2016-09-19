import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from '../components/heroes/heroes.component';
import { HeroDetailComponent }      from '../components/heroes/hero/hero-detail.component';
import { DashboardComponent }      from '../components/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
  },
  {
  path: 'dashboard',
  component: DashboardComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
  path: 'detail/:id',
  component: HeroDetailComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
