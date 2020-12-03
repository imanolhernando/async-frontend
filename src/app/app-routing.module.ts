import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repositorio',
    pathMatch: 'full'
  },
  {
    path: 'repositorio',
    loadChildren: () => import('./pages/repositorio/repositorio.module').then( m => m.RepositorioModule)
  },
  {
    path: 'repositorio/:owner/:repo',
    loadChildren: () => import('./pages/repositorio/repositorio.module').then( m => m.RepositorioModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
