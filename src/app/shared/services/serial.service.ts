import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Serial } from "./Serial";
import { AngularFire } from "angularfire2";
import { TmdbSerial } from "./TmdbSerial";

@Injectable()
export class SerialService {

  constructor(private af: AngularFire) { }

  getSerialsList(): Observable<Serial[]> {
    return this.af.database.list(`serials`);
  }

  getDatesStringForSerial(serial: TmdbSerial) {
    const startYear = this.getYearFromDate(serial.first_air_date);

    return serial.in_production
      ? `${startYear} - now`
      : `${startYear} - ${this.getYearFromDate(serial.last_air_date)}`;
  }



  private getYearFromDate(date: string) {
    return date.substr(0, 4);
  }
}
