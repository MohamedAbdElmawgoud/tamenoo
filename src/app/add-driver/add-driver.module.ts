import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDriverPageRoutingModule } from './add-driver-routing.module';

import { AddDriverPage } from './add-driver.page';
import { TranslateModule } from  '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDriverPageRoutingModule,
    TranslateModule
  ],
  declarations: [AddDriverPage]
})
export class AddDriverPageModule {}
