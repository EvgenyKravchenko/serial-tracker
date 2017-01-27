import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-serial-actions',
  templateUrl: './serial-actions.component.html',
  styleUrls: ['./serial-actions.component.scss']
})
export class SerialActionsComponent implements OnInit {

  @Input() isWatching: boolean;
  @Input() isArchived: boolean;

  @Output() onWatch = new EventEmitter<void>();
  @Output() onArchive = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
