import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerInfoPage } from './owner-info.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerInfoPageRoutingModule {}
