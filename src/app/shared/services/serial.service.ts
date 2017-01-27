import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Serial } from "./Serial";
import { AngularFire } from "angularfire2";
import { TmdbSerial } from "./TmdbSerial";
import { AuthService } from "./auth.service";

@Injectable()
export class SerialService {

  constructor(private af: AngularFire, private auth: AuthService) { }

  getSerialsList(): Observable<Serial[]> {
    return this.af.database.list(`serials`);
  }

  getDatesStringForSerial(serial: TmdbSerial) {
    const startYear = this.getYearFromDate(serial.first_air_date);

    return serial.in_production
      ? `${startYear} - now`
      : `${startYear} - ${this.getYearFromDate(serial.last_air_date)}`;
  }

  addToWatchList(serial: TmdbSerial) {
    this.af.database.object(`/serials/${serial.id}`).set(serial).then(res => {
      console.log(res);
      this.af.database.object(`/subscriptions/${this.auth.getUserId()}`).update({
        [serial.id]: true
      });
    });
  }

  isWatchingSerial(serial: TmdbSerial): Observable<boolean> {
    return this.af.database.object(`/subscriptions/${this.auth.getUserId()}/${serial.id}`)
      .map(val => val.$value);
  }

  private getYearFromDate(date: string) {
    return date.substr(0, 4);
  }
}
