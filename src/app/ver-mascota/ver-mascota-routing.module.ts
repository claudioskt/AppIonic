import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMascotaPage } from './ver-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: VerMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMascotaPageRoutingModule {}
