import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LectorQrUserPage } from './lector-qr-user.page';

const routes: Routes = [
  {
    path: '',
    component: LectorQrUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LectorQrUserPageRoutingModule {}
