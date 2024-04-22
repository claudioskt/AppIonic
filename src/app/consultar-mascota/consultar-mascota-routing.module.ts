import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarMascotaPage } from './consultar-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarMascotaPageRoutingModule {}
