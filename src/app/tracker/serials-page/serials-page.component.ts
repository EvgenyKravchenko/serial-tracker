import { Component, OnInit } from '@angular/core';
import { Serial } from "../services/Serial";

@Component({
  selector: 'app-serials-page',
  templateUrl: './serials-page.component.html',
  styleUrls: ['./serials-page.component.css']
})
export class SerialsPageComponent implements OnInit {

  serials: Serial[] = [
    {
      title: "Supernatual",
      currentSeason: 9,
      lastEpisode: 3
    },
    {
      title: "Braking Bad",
      currentSeason: 4,
      lastEpisode: 8
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
