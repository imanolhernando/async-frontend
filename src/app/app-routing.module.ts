import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repo',
    pathMatch: 'full'
  },
  {
    path: 'repo',
    loadChildren: () => import('./ui/pages/repo/repo.module').then( m => m.RepoModule)
  },
  {
    path: ':user/:repo',
    loadChildren: () => import('./ui/pages/issues/issues.module').then( m => m.IssuesModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
