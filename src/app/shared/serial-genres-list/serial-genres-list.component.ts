import { Component, OnInit, Input } from '@angular/core';
import { Genre } from "../services/TmdbSerial";

@Component({
  selector: 'app-serial-genres-list',
  templateUrl: './serial-genres-list.component.html',
  styleUrls: ['./serial-genres-list.component.scss']
})
export class SerialGenresListComponent implements OnInit {

  @Input() genres: Genre[];

  constructor() { }

  ngOnInit() {
  }

}
