import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions  } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-lector-qr-user',
  templateUrl: './lector-qr-user.page.html',
  styleUrls: ['./lector-qr-user.page.scss'],
})
export class LectorQrUserPage implements OnInit {

  code: any;

  constructor(private barcodeScanner: BarcodeScanner) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.code = barcodeData.text;
    }).catch(err => {
        console.log('Error', err);
    });
  }

}
