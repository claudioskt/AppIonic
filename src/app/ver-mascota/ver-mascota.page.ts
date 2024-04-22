import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { FireStoreService } from '../services/fire-store.service';
import { pet } from '../shared/user.interfase';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.page.html',
  styleUrls: ['./ver-mascota.page.scss'],
})
export class VerMascotaPage implements OnInit {
  enableNewPet2= true;
  enableNewPet = false ;
  enableNewlogo = true;
  enableNewImage = false;
  newImage = '';
  mascotas:pet[] = [];
  newMascota : pet ={
    id: '',
    nombre: '',
    raza: '',
    foto: '',
    dueno: '',
    numerodueno: 0
  };
  private path = 'Mascotas/';   

  constructor(private router: Router,public database:FireStoreService) { }

  ngOnInit() {
    this.getMascota();
  }
  salir(){
    this.router.navigate(['/menu-principal'])
  }

  getMascota(){
    this.database.getCollection<pet>(this.path).subscribe( res => {
      this.mascotas = res;
    } );
  }

  verMascota(){
    this.enableNewPet2= false;
    this.enableNewPet = true ;
    this.enableNewlogo = false;
    this.enableNewImage = true;
  }

  NoverMascota(){
    this.enableNewPet2= true;
    this.enableNewPet = false;
    this.enableNewlogo = true;
    this.enableNewImage = false;
  }

}
