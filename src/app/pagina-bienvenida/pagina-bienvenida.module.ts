import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaBienvenidaPageRoutingModule } from './pagina-bienvenida-routing.module';

import { PaginaBienvenidaPage } from './pagina-bienvenida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaBienvenidaPageRoutingModule
  ],
  declarations: [PaginaBienvenidaPage]
})
export class PaginaBienvenidaPageModule {}
