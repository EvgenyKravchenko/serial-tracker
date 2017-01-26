import { Component, OnInit, Input } from '@angular/core';
import { Serial } from "../services/Serial";
import { TmdbSerial } from "../services/TmdbSerial";

@Component({
  selector: 'app-serial-list',
  templateUrl: 'serial-list.component.html',
  styleUrls: ['serial-list.component.css']
})
export class SerialListComponent implements OnInit {

  @Input() serials: TmdbSerial[];

  constructor() { }

  ngOnInit() {
  }

}
