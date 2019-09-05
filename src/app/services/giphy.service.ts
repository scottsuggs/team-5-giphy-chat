import { AjaxResponse, ajax } from 'rxjs/ajax';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey = environment.giphy.apiKey;
  private gifsUrl = 'https://api.giphy.com/v1/gifs/';

  constructor() {}

  search(query: string, limit: number = 25, offset: number = 0) {
    ajax(
      `${this.gifsUrl}search?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=${offset}`
    ).subscribe(
      res => {
        console.log(res.response.data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
