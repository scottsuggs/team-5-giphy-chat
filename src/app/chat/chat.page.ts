import { Component, OnInit } from '@angular/core';
import {GiphyService} from "../services/giphy.service";
import {Giphy} from "../interfaces/giphy";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages = [];
  // trending = ['hi', 'hey', 'hello', 'hola'];
  trending: any[] = [];
  buttonClicked = false;
  constructor(
      private giphyService: GiphyService,
  ) { }

  ngOnInit() {
  }
  addButtonClicked() {
    console.log('add button clicked');
    this.giphyService.trending().subscribe( gif => {
      this.trending = gif.data;
      console.log(this.trending);
    });
    this.buttonClicked = true;
  }
  sendGif(item) {
    console.log('gif sent', item);
    // this.giphyService.trending().subscribe(gif => (
    //     this.messages.push({label: 'name', content: gif})
    // ));
    this.messages.push({label: 'name', content: item});
    this.closeButton();
  }
  closeButton() {
    this.buttonClicked = false;
  }
  sendRandomGif() {
    this.giphyService.random().subscribe(gif => {
      this.messages.push({label: 'name', content: gif.data});
      console.log(gif.data);
    });
  }
  searchSubmitted() {
    console.log('searching...');
  }
}
