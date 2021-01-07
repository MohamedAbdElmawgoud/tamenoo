import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerInfoPageRoutingModule } from './owner-info-routing.module';

import { OwnerInfoPage } from './owner-info.page';
import { TranslateModule } from  '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    OwnerInfoPageRoutingModule
  ],
  declarations: [OwnerInfoPage]
})
export class OwnerInfoPageModule {}
