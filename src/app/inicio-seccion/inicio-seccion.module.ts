import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSeccionPageRoutingModule } from './inicio-seccion-routing.module';

import { InicioSeccionPage } from './inicio-seccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSeccionPageRoutingModule
  ],
  declarations: [InicioSeccionPage]
})
export class InicioSeccionPageModule {}
