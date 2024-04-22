import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireStoreService } from '../services/fire-store.service';
import { pet } from '../shared/user.interfase';

@Component({
  selector: 'app-consultar-mascota',
  templateUrl: './consultar-mascota.page.html',
  styleUrls: ['./consultar-mascota.page.scss'],
})
export class ConsultarMascotaPage implements OnInit {
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
  
  constructor(public database:FireStoreService,private router: Router) { }

  ngOnInit() {
    this.getMascota();
  }

  getMascota(){
    this.database.getCollection<pet>(this.path).subscribe( res => {
      this.mascotas = res;
    } );
  }

  salir(){
    this.router.navigate(['/menu-principal'])
  }
}
