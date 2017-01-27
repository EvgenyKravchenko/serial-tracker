import { Component, OnInit, Input } from '@angular/core';
import { TmdbSerial } from "../services/TmdbSerial";
import { SerialService } from "../services/serial.service";

@Component({
  selector: 'app-serial-title',
  templateUrl: './serial-title.component.html',
  styleUrls: ['./serial-title.component.scss']
})
export class SerialTitleComponent implements OnInit {

  @Input() serial: TmdbSerial;

  constructor(private serialService: SerialService) { }

  ngOnInit() {
  }

  generateDatesString() {
    return this.serialService.getDatesStringForSerial(this.serial);
  }
}
