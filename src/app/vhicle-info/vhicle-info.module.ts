import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VhicleInfoPageRoutingModule } from './vhicle-info-routing.module';

import { VhicleInfoPage } from './vhicle-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VhicleInfoPageRoutingModule
  ],
  declarations: [VhicleInfoPage]
})
export class VhicleInfoPageModule {}
