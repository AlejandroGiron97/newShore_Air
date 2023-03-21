import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from 'src/app/view/flight/flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearcherRoutingModule } from './searcher-routing.module';


@NgModule({
  declarations: [FlightComponent],
  imports: [
    CommonModule,
    FormsModule,
    SearcherRoutingModule,
    ReactiveFormsModule
  ]
})
export class SearcherModule { }
