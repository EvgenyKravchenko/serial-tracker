import { Component, OnInit, Input } from '@angular/core';
import { Serial } from "../services/Serial";
import { TmdbSerial } from "../services/TmdbSerial";
import { TmdbSerialSearchResult } from "../services/TmdbSerialSearchResult";

@Component({
  selector: 'app-serial-list-item',
  templateUrl: 'serial-list-item.component.html',
  styleUrls: ['serial-list-item.component.scss']
})
export class SerialListItemComponent implements OnInit {

  @Input() serial: TmdbSerialSearchResult;

  constructor() { }

  ngOnInit() {
  }

  getImageSrc(path: string) {
    return `http://image.tmdb.org/t/p/w300${path}`;
  }
}
