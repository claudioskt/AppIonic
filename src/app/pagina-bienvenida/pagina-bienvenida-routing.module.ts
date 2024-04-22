import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaBienvenidaPage } from './pagina-bienvenida.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaBienvenidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaBienvenidaPageRoutingModule {}
