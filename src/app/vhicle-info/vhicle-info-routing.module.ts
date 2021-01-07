import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VhicleInfoPage } from './vhicle-info.page';

const routes: Routes = [
  {
    path: '',
    component: VhicleInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VhicleInfoPageRoutingModule {}
