import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { DbService } from './../services/db.service';
import { ToastController } from '@ionic/angular';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  mainForm: FormGroup;
  data: any[] = []

  



  constructor(private animationCtrl: AnimationController,
    private router: Router,
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    ) {}

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(2)]],
      clave:['']
    })
  }

  

  iniciarSesion() {
    this.db.login(
      this.mainForm.value.usuario,
      this.mainForm.value.clave
    ).then((res) => {
      console.log(res)
        let navigationExtras: NavigationExtras = {
          
          state: { user: res },
        };
      this.mainForm.reset();
      this.router.navigate(['entrada-usuario/'],navigationExtras)
      localStorage.setItem('logueado','1')
    })
  }
  animar5(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#ingreso'))
    .duration(1000)
    .keyframes([
      { offset: 0.2, 'transform': 'translateX(15px)' },
      { offset: 0.3, 'transform': 'translateX(-15px)' },
      { offset: 0.4, 'transform': 'translateX(15px)' },
      { offset: 0.50, 'transform': 'translateX(-15px)' },
      { offset: 0.60, 'transform': 'translateX(15px)' },
      { offset: 0.7, 'transform': 'translateX(-15px)' },
      { offset: 0.8, 'transform': 'translateX(15px)' },
      { offset: 0.9, 'transform': 'translateX(-15px)' },
      { offset: 1, 'transform': 'translateX(0px)'}
    ])
    .iterations(1)
    .play()
  }

  animar(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#usuario'))
    .duration(1000)
    .keyframes([
      { offset: 0.3, 'color':'blue'},
      { offset: 0.6, 'color':'yellow'},
      { offset: 1, 'color':'black'}
    ])
    .iterations(2)
    .play()
  }

  animar2(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#mail'))
    .duration(1000)
    .keyframes([
    { offset: 0.3, 'color':'blue'},
    { offset: 0.6, 'color':'yellow'},
    { offset: 1, 'color':'black'}
    ])
    .iterations(2)
    .play()
  }

  animar3(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#password'))
    .duration(1000)
    .fromTo('opacity', '1', '0.5')
    .iterations(2)
    .play()
  }
  animar4(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#name'))
    .duration(1000)
    .fromTo('opacity', '0.5', '1')
    .iterations(2)
    .play()
  }

  gotologin(){
    this.router.navigate(['/inicio-seccion'])
  }

  gotoregistro(){
    this.router.navigate(['/registrousuario'])

  }
}

  

