import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { FireStorageService } from './services/fire-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usuario={
    email:'',
    password:''
  }

  constructor(
    private platform: Platform,
    public router: Router,
    private authservice:AuthService,
    private strageService:FireStorageService){



    this.initializeApp();
  }
  initializeApp(){
    this.platform.ready().then(() => {
      this.router.navigateByUrl('pagina-bienvenida')
    })
  }

  registrar(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authservice.register(email,password).then(res => {
      console.log("se registro",res);
    })

  }

  ingresar(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authservice.login(email,password).then(res => {
      console.log("se ingreso",res);
    })


  }

}
