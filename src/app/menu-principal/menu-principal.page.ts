import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }
  registramascota(){
    this.router.navigate(['/c'])
  }
    
  vermascota(){
    this.router.navigate(['/ver-mascota'])
  }

}
