import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs";
import { TmdbSerialSearchResult } from "./TmdbSerialSearchResult";
import { TmdbSerial } from "./TmdbSerial";

@Injectable()
export class TmdbService {
  public static API_KEY = '9706cfacd9dcaa86df597c461ff04386';
  public static API_URL = 'https://api.themoviedb.org/3';
  constructor(private http: Http) { }

  searchSerial(searchString: string): Observable<TmdbSerialSearchResult[]> {
    const options = this.getRequestOptions();

    options.search.set('query', searchString);

    return this.http.get(`${TmdbService.API_URL}/search/tv`, options)
      .map(response => response.json());
  }

  getSerialInfo(id: number): Observable<TmdbSerial> {
    const options = this.getRequestOptions();

    return this.http.get(`${TmdbService.API_URL}/tv/${id}`, options)
      .map(response => response.json());
  }




  private getRequestOptions(): RequestOptions {
    const options: RequestOptions = new RequestOptions();
    const params: URLSearchParams = new URLSearchParams();

    params.set('api_key', TmdbService.API_KEY);
    params.set('language', 'en-US');

    options.search = params;

    return options;
  }
}
