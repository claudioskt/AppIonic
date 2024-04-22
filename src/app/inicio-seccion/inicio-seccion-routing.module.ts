import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSeccionPage } from './inicio-seccion.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSeccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSeccionPageRoutingModule {}
