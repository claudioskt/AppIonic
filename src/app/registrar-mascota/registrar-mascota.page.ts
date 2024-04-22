import { Component, OnInit } from '@angular/core';
import { pet } from '../shared/user.interfase';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { FireStoreService } from '../services/fire-store.service';
import { Router } from '@angular/router';
import { FireStorageService } from '../services/fire-storage.service';


@Component({
  selector: 'app-registrar-mascota',
  templateUrl: './registrar-mascota.page.html',
  styleUrls: ['./registrar-mascota.page.scss'],
})
export class RegistrarMascotaPage implements OnInit {
  newfile = '';
  newImage = '';
  newMascota:pet={
    id:this.database.getId(),
    nombre:'',
    raza:'',
    foto:'',
    dueno:'',
    numerodueno:null,
  };
  

  constructor(public database:FireStoreService,private router: Router,public loadingController: LoadingController,public toastController: ToastController,public firestorageservice:FireStorageService) { }

  ngOnInit() {
  }

  prueba(){
    console.log(this.newMascota);
  }

  async guardarMascota(){
    const path = 'Mascotas';
    const name = this.newMascota.nombre;
    const res = await this.firestorageservice.uploadImage(this.newfile,path,name);
    this.newMascota.foto = res;
    console.log('recibi promesa ',res);
    console.log('fin de la funcion --> newImageUpload');
    this.database.crearDoc(this.newMascota,path,this.newMascota.id);
    return this.presentLoading()
  }

  salir(){
    this.router.navigate(['/menu-principal'])
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Registrando Mascota',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    return this.presentToast();
    
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Mascota Registrada con Exito',
      duration: 2000,
      color:"success"
    });
    toast.present();
    return this.salir();
  }

  async imgcargadatoas() {
    const toast = await this.toastController.create({
      message: 'Foto Cargada con Exito',
      duration: 2000,
      color:"danger"
    });
    toast.present();
  }

  async newImageUpload(event:any){
    if (event.target.files && event.target.files[0]){
      this.newfile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((Image) => {
        this.newImage = Image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
      return this.imgcargadatoas();
    }
    


  }


  
}
