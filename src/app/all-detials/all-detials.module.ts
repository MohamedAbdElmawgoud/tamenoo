import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllDetialsPageRoutingModule } from './all-detials-routing.module';

import { AllDetialsPage } from './all-detials.page';
import { TranslateModule } from  '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AllDetialsPageRoutingModule
  ],
  declarations: [AllDetialsPage]
})
export class AllDetialsPageModule {}
