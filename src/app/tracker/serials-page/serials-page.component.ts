import { Component, OnInit } from '@angular/core';
import { Serial } from "../../shared/services/Serial";
import { SerialService } from "../../shared/services/serial.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-serials-page',
  templateUrl: './serials-page.component.html',
  styleUrls: ['./serials-page.component.css']
})
export class SerialsPageComponent implements OnInit {

  private serials$: Observable<Serial[]>;

  constructor(private serialService: SerialService) { }

  ngOnInit() {
    this.serials$ = this.serialService.getSerialsList();
  }

}
