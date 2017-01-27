import { Component, OnInit } from '@angular/core';
import { TmdbSerial } from "../services/TmdbSerial";
import { SerialService } from "../services/serial.service";
import { TmdbService } from "../services/tmdb.service";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-serial-info',
  templateUrl: 'serial-info.component.html',
  styleUrls: ['serial-info.component.scss']
})
export class SerialInfoComponent implements OnInit {

  private serial: TmdbSerial;
  private isWatching: boolean;

  constructor(
    private auth: AuthService,
    private serialService: SerialService,
    private tmdb: TmdbService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tmdb.getSerialInfo(+params['id']).subscribe(serial => this.onSerialReady(serial));
    });
  }

  getPosterUrl() {
    return `http://image.tmdb.org/t/p/w500${this.serial.poster_path}`;
  }



  watchSerial() {
    this.serialService.addToWatchList(this.serial);
  }

  archiveSerial() {
    console.log('Will be archived someday');
  }

  onSerialReady(serial: TmdbSerial) {
    console.log('Fetch:', serial);
    this.serial = serial;
    this.serialService.isWatchingSerial(this.serial)
      .subscribe(isWatching => this.isWatching = isWatching);
  }
}
