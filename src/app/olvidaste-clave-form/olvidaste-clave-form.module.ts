import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from'@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { IonicModule } from '@ionic/angular';

import { OlvidasteClaveFormPageRoutingModule } from './olvidaste-clave-form-routing.module';

import { OlvidasteClaveFormPage } from './olvidaste-clave-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OlvidasteClaveFormPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  declarations: [OlvidasteClaveFormPage]
})
export class OlvidasteClaveFormPageModule {}
