import { Component, OnInit, Input } from '@angular/core';
import { Serial } from "../services/Serial";

@Component({
  selector: 'app-serial-list-item',
  templateUrl: './serial-list-item.component.html',
  styleUrls: ['./serial-list-item.component.scss']
})
export class SerialListItemComponent implements OnInit {

  @Input() serial: Serial;

  constructor() { }

  ngOnInit() {
  }

}
