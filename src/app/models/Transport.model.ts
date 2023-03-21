//Class that model the transport

export class TransportModel {
  constructor (flightCarrier: string, flightNumber: string){
      this.FlightCarrier = flightCarrier;
      this.FlightNumber = flightNumber;
  }

  FlightCarrier: string ="";
  FlightNumber: string = "";
}
