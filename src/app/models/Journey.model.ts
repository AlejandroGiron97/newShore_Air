//Class make for model the travel

import { FlightModel } from "./Fligth.model";

export class JourneyModel{
    Flights: FlightModel[] = [];
    Origin: string = "";
    Destination: string = "";
    Price: number = 0;
}
