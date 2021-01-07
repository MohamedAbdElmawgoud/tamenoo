import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrafficViolationPageRoutingModule } from './traffic-violation-routing.module';

import { TrafficViolationPage } from './traffic-violation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrafficViolationPageRoutingModule
  ],
  declarations: [TrafficViolationPage]
})
export class TrafficViolationPageModule {}
