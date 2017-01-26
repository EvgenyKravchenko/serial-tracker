import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Observable } from "rxjs";
import { TmdbSerialSearchResult } from "../../shared/services/TmdbSerialSearchResult";
import { TmdbService } from "../../shared/services/tmdb.service";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements AfterViewInit {

  private searchResults$: Observable<TmdbSerialSearchResult[]>;

  constructor(private tmdb: TmdbService, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const input = this.elementRef.nativeElement.querySelector('.search-input');

    this.searchResults$ = Observable.fromEvent(input, 'input')
      .map((event: KeyboardEvent) => (event.target as HTMLInputElement).value)
      .throttleTime(1500)
      .switchMap(str => this.tmdb.searchSerial(str))
      .map(res => (res as any).results);
  }
}
