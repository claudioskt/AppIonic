import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from'@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

import { IonicModule } from '@ionic/angular';

import { LectorQrPageRoutingModule } from './lector-qr-routing.module';

import { LectorQrPage } from './lector-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectorQrPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  declarations: [LectorQrPage]
})
export class LectorQrPageModule {}
