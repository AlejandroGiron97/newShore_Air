import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from 'src/app/view/flight/flight.component';

const routes: Routes = [
  {
    path: 'flight',
    component: FlightComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearcherRoutingModule { }
