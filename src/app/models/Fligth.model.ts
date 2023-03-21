import {TransportModel} from "./Transport.model";

//Class make for flight model

export class FlightModel{
    constructor (transport: TransportModel, origin: string, destination: string, price: number){
        this.transport=transport;
        this.origin=origin;
        this.destination=destination;
        this.price=price;
    }

    transport?: TransportModel;
    origin: string="";
    destination: string="";
    price: number=0;
}
