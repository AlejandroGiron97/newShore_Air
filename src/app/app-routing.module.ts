import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'searcher',
    loadChildren: () => import('./modules/searcher/searcher.module').then(m => m.SearcherModule)
  },
  {
    path: '**',
    redirectTo: '/searcher/flight'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
