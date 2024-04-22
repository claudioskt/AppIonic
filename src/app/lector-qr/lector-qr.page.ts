import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions  } from '@ionic-native/barcode-scanner/ngx';
import { LoadingController } from '@ionic/angular';
import { FireStoreService } from '../services/fire-store.service';
import {  consultor, pet } from '../shared/user.interfase';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQrPage {
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  consulta:consultor={
    identificador: '',
    id: ''
  };


  newMascota:pet={
    id:this.database.getId(),
    nombre:'',
    raza:'',
    foto:'',
    dueno:'',
    numerodueno:null,
  };
  
  code: any;
  private path = 'Mascotas/';  

  constructor(private barcodeScanner: BarcodeScanner,private router: Router,public database:FireStoreService,public loadingController: LoadingController) {
    this.encodeData = "https://www.FreakyJolly.com";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  scanQr() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.scannedData = barcodeData;
        window.location.href = `mailto:PENE@gmail.com&subject=Asunto&body= ${barcodeData}`;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.code = barcodeData.text;
    }).catch(err => {
        console.log('Error', err);
    });
  }

  salir(){
    this.router.navigate(['/menu-principal'])
  }

  consultarMascota(){
    this.router.navigate(['/consultar-mascota'])
    

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Consultando ID',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    return this.consultarMascota();
    
  }

  consultarId(){
    console.log(this.consulta);
    // const path = 'Mascotas/';
    // const id = this.consultor;
    // this.database.getDoc<pet>(path,id).subscribe(res=> {
    //   this.newMascota = res;
    //   console.log();
    // });
  }

}
