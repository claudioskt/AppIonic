import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-bienvenida',
  templateUrl: './pagina-bienvenida.page.html',
  styleUrls: ['./pagina-bienvenida.page.scss'],
})
export class PaginaBienvenidaPage implements OnInit {

  constructor(public router:Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('home')
    },2400)
  }

  ngOnInit() {
  }

}
