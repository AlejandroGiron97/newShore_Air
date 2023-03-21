import { Component, OnInit } from '@angular/core';
import { PriceModel } from 'src/app/models/Price.model';
import { GeneralData } from 'src/app/config/general.data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { FlightService } from 'src/app/services/flight.service';
import { FlightModel } from 'src/app/models/Fligth.model';
import Swal from 'sweetalert2';
import { Airport } from 'src/app/models/Third/Airport.model';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  //Atribrutes Component
  length = GeneralData.ROUTE_LENGTH;
  formJourney: FormGroup = this.fb.group({});
  money: PriceModel[]=[];
  price: number=0-0;
  selected: PriceModel = new PriceModel(1, "USD",1);
  flights: FlightModel[]=[];
  airports: Airport[]= [];
  departures?: (string | undefined)[]=[];

  //Dependency injection
  constructor(private fb: FormBuilder,
    private _flightService: FlightService,
    private _popupService: PopupService) {
    }



  ngOnInit(): void {
    this.money.push(new PriceModel(1,"USD", 1));
    this.money.push(new PriceModel (2, "EUR", 0.95));
    this.money.push(new PriceModel (3, "COP", 4.773));
    this.getAirports();
    this.selected = this.money[0];
    this.buildForm();
  }

  //Component init
  buildForm() {
    this.formJourney = this.fb.group({
      origin: ['', [Validators.required, Validators.minLength(this.length),],],
      destination: ['', [Validators.required, Validators.minLength(this.length),],],
      prices: ['', []],
    })
  }
  //Get Form
  get getForm(){
    return this.formJourney.controls;
  }


  getFlights(){
    let origin = this.getForm['origin'].value;
    let destination = this.getForm['destination'].value;

    if(origin != destination) {
      this._flightService.GetFlights(origin,destination).
      subscribe((data:FlightModel[]) =>{
        if(data && data.length>0){
          this.flights = data;
        }else{
          this._popupService.showModal("No hay resultados","Lo sentimos..");
        }


      });
    }

  }

  getAirports(){
      this._flightService.GetAirports().
      subscribe((data:Airport[]) =>{
        if(data && data.length>0)
          this.airports = data;
          this.getDepartures(this.airports);
      });

  }

  getDepartures(airports:Airport[]){
    this.departures = [... new Set(airports.map(x=>x.departureStation))];
  }



  /**
   * Method that update the money, no return
   * @param id id: any is the selection of user
   */
  updateMoney(id:any){
    if(id){
      if(id.target){
        let money = this.money[Number.parseInt(id.target.value)];
        if (money != null){
          this.selected = money;
        }
      }
    }
  }

}
