import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Serial } from "./Serial";
import { AngularFire } from "angularfire2";

@Injectable()
export class SerialService {

  constructor(private af: AngularFire) { }

  getSerialsList(): Observable<Serial[]> {
    return this.af.database.list(`serials`);
  }
}
