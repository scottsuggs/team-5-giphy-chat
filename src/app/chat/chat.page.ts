import { Component, OnInit } from '@angular/core';
import {GiphyService} from "../services/giphy.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages = [];
  buttonClicked = false;
  constructor(
      private giphyService: GiphyService,
  ) { }

  ngOnInit() {
  }
  addButtonClicked() {
    console.log('add button clicked');
    this.buttonClicked = true;
  }
  sendGif() {
    console.log('gif sent');
    this.messages.push({label: 'name', content: 'hey'});
    this.buttonClicked = false;
  }
  sendRandomGif() {
    this.messages.push({label: 'name', content: 'random gif'});
  }
  searchSubmitted() {
    console.log('searching...');
  }
}
