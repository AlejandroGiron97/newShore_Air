import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlightModel } from "../models/Fligth.model";
import { GeneralData } from "../config/general.data";
import { JourneyModel } from "../models/Journey.model";
import { Observable } from "rxjs";
import { PriceModel } from "../models/Price.model";
import { Airport } from "../models/Third/Airport.model";

@Injectable({
    providedIn: 'root'
})
export class FlightService {
    private urlFlights: string = GeneralData.URL_FLIGHT;
    private urlBack: string = GeneralData.URL_BACK;
    private urlMoneyApi: string = GeneralData.URL_MONEY;
    private flights: FlightModel[] = [];
    constructor(private http: HttpClient) { }

    GetFlights(origin: string, destination: string): Observable<FlightModel[]> {
        return this.http.get<FlightModel[]>(`${this.urlBack}/${origin}/${destination}`);

      }

    GetAirports(): Observable<Airport[]> {
      return this.http.get<Airport[]>(`${this.urlFlights}/`);

    }

    MoneyChange(base: string, value: number): Observable<PriceModel> {
        return this.http.post<PriceModel>(`${this.urlBack}`, {description: base, value: value},
        {headers: new HttpHeaders()});
      }


}
