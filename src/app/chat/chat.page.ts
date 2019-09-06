import { Component, OnInit } from '@angular/core';
import {GiphyService} from "../services/giphy.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages = [];
  constructor(
      private giphyService: GiphyService,
  ) { }

  ngOnInit() {
  }
  addGif() {
    console.log('gif added');
    this.messages.push({label: 'name', content: 'hey'});
  }
  searchSubmitted() {
    console.log('searching...');
  }
}
