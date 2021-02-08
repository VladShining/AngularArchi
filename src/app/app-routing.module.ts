import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForOForComponent } from './@pages/for-o-for/for-o-for.component';
import { HomeComponent } from './@pages/home/home.component';
import { UserListComponent } from './@pages/root/user/component/user-list/user-list.component';
import { CalendarComponent } from './test/calendar/calendar.component';
import { DragComponent } from './test/drag/drag.component';
import { FormComponent } from './test/form/form.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserListComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'test/form',
    component: FormComponent,
  },
  {
    path: 'test/drag',
    component: DragComponent,
  },
  {
    path: 'test/calendar',
    component: CalendarComponent,
  },
  {
    path: 'authentication',
    loadChildren: './@pages/auth/auth.module',
    data: { title: 'Se connecter' },
  },

  {
    path: 'app',
    loadChildren: './test/appareil/appareil.module',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    component: ForOForComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
