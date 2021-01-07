import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllDetialsPage } from './all-detials.page';

const routes: Routes = [
  {
    path: '',
    component: AllDetialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllDetialsPageRoutingModule {}
