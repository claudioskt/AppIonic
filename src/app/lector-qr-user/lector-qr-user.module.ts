import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LectorQrUserPageRoutingModule } from './lector-qr-user-routing.module';

import { LectorQrUserPage } from './lector-qr-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectorQrUserPageRoutingModule
  ],
  declarations: [LectorQrUserPage]
})
export class LectorQrUserPageModule {}
