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

  search(query: string, limit?: number, offset?: number) {
    ajax(
      `${this.gifsUrl}/search?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=${offset}`
    ).subscribe();
  }
}
