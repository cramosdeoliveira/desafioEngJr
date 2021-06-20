import { LoginGuard } from './autenticacao/login.guard';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanLoad } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( (m) => m.HomeModule ),
    canLoad: [LoginGuard]
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais-routing.module').then( (m) => m.AnimaisRoutingModule),
    canLoad: [AutenticacaoGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
