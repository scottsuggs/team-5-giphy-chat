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
  trending: any[] = [];
  searched;
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
      // console.log(this.trending);
    });
    this.buttonClicked = true;
    console.log('searched:', this.searched);
  }
  sendGif(item) {
    console.log('gif sent', item);
    this.messages.push({label: 'name', content: item});
    this.closeButton();
  }
  closeButton() {
    this.buttonClicked = false;
    this.searched = undefined;
  }
  sendRandomGif() {
    this.giphyService.random().subscribe(gif => {
      this.messages.push({label: 'name', content: gif.data});
      console.log(gif.data);
    });
  }
  searchSubmitted(event) {
    const searchTerm = event.target.value;
    console.log(searchTerm);
    this.giphyService.search(searchTerm).subscribe(gif => {
      this.searched = gif.data;
      console.log(this.searched);
    });
  }
}
