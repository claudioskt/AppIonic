import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMascotaPageRoutingModule } from './ver-mascota-routing.module';

import { VerMascotaPage } from './ver-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMascotaPageRoutingModule
  ],
  declarations: [VerMascotaPage]
})
export class VerMascotaPageModule {}
