import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForOForComponent } from 'src/app/@pages/for-o-for/for-o-for.component';
import { AppareilComponent } from './appareil.component';

const routes: Routes = [{ path: 'appareil', component: AppareilComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppareilRoutingModule {}
