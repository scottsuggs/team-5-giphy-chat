import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  OnInit
} from '@angular/core';

import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.page.html',
  styleUrls: ['./add-chat.page.scss']
})
export class AddChatPage implements OnInit, AfterContentInit, DoCheck {
  users: User[];
  query: string;

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    this.firebase.getUsers().subscribe(data => {
      this.users = data;
      console.log('init users', this.users);
    });
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.firebase.getUsers().subscribe(data => {
      this.users = data;
      console.log('init users', this.users);
    });
  }

  ionViewWillEnter(): void {
    // this.firebase.getUsers().subscribe(data => {
    //   this.users = data;
    //   console.log('init users', this.users);
    // });
  }

  ionViewDidEnter(): void {
    // this.firebase.getUsers().subscribe(data => {
    //   this.users = data;
    //   console.log('init users', this.users);
    // });
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // this.firebase.getUsers().subscribe(data => {
    //   this.users = data;
    //   console.log('init users', this.users);
    // });
  }

  log() {
    console.log('users', this.users);
  }

  addUser(user: User) {
    this.firebase.addUserDocument(user);
  }
}
