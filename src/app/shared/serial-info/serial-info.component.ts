import { Component, OnInit } from '@angular/core';
import { TmdbSerial } from "../services/TmdbSerial";
import { SerialService } from "../services/serial.service";
import { TmdbService } from "../services/tmdb.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-serial-info',
  templateUrl: 'serial-info.component.html',
  styleUrls: ['serial-info.component.scss']
})
export class SerialInfoComponent implements OnInit {

  private serial: TmdbSerial;

  constructor(
    private serialService: SerialService,
    private tmdb: TmdbService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tmdb.getSerialInfo(+params['id']).subscribe(serial => this.serial = serial);
    });
  }

  getPosterUrl() {
    return `http://image.tmdb.org/t/p/w500${this.serial.poster_path}`;
  }

  generateDatesString() {
    return this.serialService.getDatesStringForSerial(this.serial);
  }
}
