import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-olvidaste-clave-form',
  templateUrl: './olvidaste-clave-form.page.html',
  styleUrls: ['./olvidaste-clave-form.page.scss'],
})
export class OlvidasteClaveFormPage implements OnInit {ionicForm: FormGroup;
  isSubmitted = true;

  constructor(public formBuilder: FormBuilder,public toast: ToastController, private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }

  async showToast() {
    const toast = await this.toast.create({
      message: '¡Enviado!',
      duration: 3000
    });
    toast.present();
  }
  animar(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#name2'))
    .duration(1000)
    .keyframes([
      { offset: 0.5, 'color':'blue'},
      { offset: 1, 'color':'yellow'},
    ])
    .iterations(2)
    .play()
  }

  animar2(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#mail2'))
    .duration(1000)
    .keyframes([
    { offset: 0.5, 'color':'blue'},
    { offset: 1, 'color':'yellow'},
    ])
    .iterations(2)
    .play()
  }



  animar3(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#mail1'))
    .duration(1000)
    .fromTo('opacity', '0.5', '1')
    .iterations(2)
    .play()
  }
  animar4(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#name1'))
    .duration(1000)
    .fromTo('opacity', '0.5', '1')
    .iterations(2)
    .play()
  }

  animar5(){
    this.animationCtrl.create()
    .addElement(document.querySelector('#ingreso1'))
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


}