import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import {  usuarios } from '../shared/user.interfase';
import { Router } from '@angular/router';
import { FireStoreService } from '../services/fire-store.service';
@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.page.html',
  styleUrls: ['./registrousuario.page.scss'],
})
export class RegistrousuarioPage implements OnInit {

  // usuario:user= {
  //   uid:'',
  //   email:'',
  //   password:'',
  // }

  user:usuarios={
    uid: '',
    nombre: '',
    apellido: '',
    numero: null,
    email: '',
    password: ''
  }


  constructor(public database:FireStoreService,private authservice:AuthService,public alerta:AlertController,private router: Router ,public loadingController: LoadingController,public toastController: ToastController) { }
  


  async registrar(){
    console.log(this.user);
    const {email, password} = this.user;
    this.authservice.register(email,password).then(res => {
    console.log("se registro",res);
  });
  const uid = await this.authservice.getUid();
  console.log(uid);
  this.user.uid = uid;
  return this.guardarUser();
  }

  guardarUser(){
      const path = 'Usuarios';
      this.database.crearDoc(this.user,path,this.user.uid);
      return this.presentLoading();
    }




  async alert(){
    let miAlerta = this.alerta.create({
      message: 'el usuario se registro con exito',
      buttons:['ok']
    });
    (await miAlerta).present();
  }

  salir(){
    this.router.navigate(['/menu-principal'])
  }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Registrando Usuario',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    return this.presentToast();
    
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario Registrado con Exito',
      duration: 2000,
      color:"success"
    });
    toast.present();
    return this.salir();
  }
  

  
}
