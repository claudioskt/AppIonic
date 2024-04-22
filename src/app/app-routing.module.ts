import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina-bienvenida',
    loadChildren: () => import('./pagina-bienvenida/pagina-bienvenida.module').then( m => m.PaginaBienvenidaPageModule)
  },
  {
    path: 'lector-qr',
    loadChildren: () => import('./lector-qr/lector-qr.module').then( m => m.LectorQrPageModule)
  },
  {
    path: 'olvidaste-clave-form',
    loadChildren: () => import('./olvidaste-clave-form/olvidaste-clave-form.module').then( m => m.OlvidasteClaveFormPageModule)
  },
  {
    path: 'cambiar-clave',
    loadChildren: () => import('./cambiar-clave/cambiar-clave.module').then( m => m.CambiarClavePageModule)
  },
  {
    path: 'inicio-seccion',
    loadChildren: () => import('./inicio-seccion/inicio-seccion.module').then( m => m.InicioSeccionPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'lector-qr-user',
    loadChildren: () => import('./lector-qr-user/lector-qr-user.module').then( m => m.LectorQrUserPageModule)
  },
  {
    path: 'c',
    loadChildren: () => import('./registrar-mascota/registrar-mascota.module').then( m => m.RegistrarMascotaPageModule)
  },
  {
    path: 'registrousuario',
    loadChildren: () => import('./registrousuario/registrousuario.module').then( m => m.RegistrousuarioPageModule)
  },
  {
    path: 'ver-mascota',
    loadChildren: () => import('./ver-mascota/ver-mascota.module').then( m => m.VerMascotaPageModule)
  },
  {
    path: 'consultar-mascota',
    loadChildren: () => import('./consultar-mascota/consultar-mascota.module').then( m => m.ConsultarMascotaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
