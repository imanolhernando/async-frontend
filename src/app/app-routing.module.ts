import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repo',
    pathMatch: 'full'
  },
  {
    path: 'repo',
    loadChildren: () => import('./pages/repo/repo.module').then( m => m.RepoModule)
  },
  {
    path: ':user/:repo',
    loadChildren: () => import('./pages/issues/issues.module').then( m => m.IssuesModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
