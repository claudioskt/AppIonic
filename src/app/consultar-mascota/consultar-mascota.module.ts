import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarMascotaPageRoutingModule } from './consultar-mascota-routing.module';

import { ConsultarMascotaPage } from './consultar-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarMascotaPageRoutingModule
  ],
  declarations: [ConsultarMascotaPage]
})
export class ConsultarMascotaPageModule {}
