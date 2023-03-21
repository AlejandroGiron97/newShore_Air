
//Class make for airport model

export class Airport{
  constructor (origin: string, destination: string, price: number, flightCarrier:string){
      this.departureStation=origin;
      this.arrivalStation=destination;
      this.price=price;
      this.flightCarrier=flightCarrier;
  }

  departureStation?: string;
  arrivalStation: string="";
  flightNumber: string="";
  price: number=0;
  flightCarrier?: string;
}
