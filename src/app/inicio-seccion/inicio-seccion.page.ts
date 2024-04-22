import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { usuarios } from '../shared/user.interfase';

@Component({
  selector: 'app-inicio-seccion',
  templateUrl: './inicio-seccion.page.html',
  styleUrls: ['./inicio-seccion.page.scss'],
})
export class InicioSeccionPage implements OnInit {

  // usuario={
  //   email:'',
  //   password:''
  // }

  user:usuarios={
    uid: '',
    nombre: '',
    apellido: '',
    numero: null,
    email: '',
    password: ''
  }
  
  constructor (private authSvc:AuthService,private router: Router,public loadingController: LoadingController){


    
  }
  ingresar(){
    const credenciales = {
      email:this.user.email,
      password:this.user.password,
    };
    this.authSvc.login(credenciales.email,credenciales.password).then(res =>{
      console.log('ingreso exitoso');
      return this.presentLoading();
    })

  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Autentificando',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    return this.menu();
    
  }
  menu(){
    this.router.navigate(['/menu-principal'])
  }

  salir(){
    this.router.navigate(['/home'])
  }

  ngOnInit(): void {
  }

}
