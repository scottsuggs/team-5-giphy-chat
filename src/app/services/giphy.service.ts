import { AjaxResponse, ajax } from 'rxjs/ajax';
import { map, tap } from 'rxjs/operators';

import { Giphy } from '../interfaces/giphy';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomGiphy } from '../interfaces/random-giphy';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey = environment.giphy.apiKey;
  private gifsUrl = 'https://api.giphy.com/v1/gifs/';

  constructor(private http: HttpClient) {}

  /*
  usage
  giphy.search('YOUR-QUERY').subscribe(giphyResponse)  

  HTML
  *ngFor= "let gif of (gifs | async)?.data"
  */
  search(
    query: string,
    limit: number = 25,
    offset: number = 0
  ): Observable<Giphy> {
    return this.http
      .get<Giphy>(
        `${this.gifsUrl}search?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=${offset}`
      )
      .pipe(tap(data => console.log(data, 'giphy search results')));
  }
  random(tag?: string): Observable<RandomGiphy> {
    return this.http
      .get<RandomGiphy>(
        `${this.gifsUrl}random?api_key=${this.apiKey}&tag=${tag}`
      )
      .pipe(tap(data => console.log(data, 'data random results')));
  }
}
