import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppareilComponent } from './appareil.component';
import { AppareilRoutingModule } from './appareil-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppareilComponent],
  imports: [CommonModule, AppareilRoutingModule, FormsModule],
})
export class AppareilModule {}
