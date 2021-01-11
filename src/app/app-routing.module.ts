import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForOForComponent } from './@pages/for-o-for/for-o-for.component';
import { HomeComponent } from './@pages/home/home.component';
import { DragComponent } from './test/drag/drag.component';
import { FormComponent } from './test/form/form.component';

const routes: Routes = [
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
    path: 'authentication',
    loadChildren: './@pages/auth/auth.module',
    data: { title: 'Se connecter' },
  },
  {
    path: 'root',
    loadChildren: './root/root.module#RootModule',
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
