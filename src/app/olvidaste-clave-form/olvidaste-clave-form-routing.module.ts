import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidasteClaveFormPage } from './olvidaste-clave-form.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidasteClaveFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidasteClaveFormPageRoutingModule {}
