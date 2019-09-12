import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Chat } from '../interfaces/chat';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private usersCollection: AngularFirestoreCollection<User>;
  private userDocument: AngularFirestoreDocument<User>;
  private chatsCollection: AngularFirestoreCollection<Chat>;
  private chatDocument: AngularFirestoreDocument<Chat>;
  private USERS_URL = 'users/';
  users: Observable<User[]>;
  user: Observable<User>;
  chats: Observable<Chat[]>;
  chat: Observable<Chat>;

  constructor(private db: AngularFirestore) {
    this.usersCollection = db.collection<User>('users');
    this.chatsCollection = db.collection<Chat>('chats');

    this.chats = this.chatsCollection.valueChanges({ idField: 'id' });
    this.users = this.usersCollection.valueChanges({ idField: 'id' });
  }

  //====Users====
  addUserDocument(user: User) {
    this.usersCollection.add(user);
  }
  getUserDocument(): Observable<User> {
    return (this.user = this.userDocument.valueChanges());
  }
  setUserDocument(id: string) {
    this.userDocument = this.db.doc<User>(`${this.USERS_URL}${id}`);
  }
  removeUserDocument(id: string) {
    this.setUserDocument(id);
    this.userDocument.delete();
  }
  updateUserDocument(id: string, data: User) {
    this.setUserDocument(id);
    this.userDocument.update(data);
  }
  getUsers(): Observable<User[]> {
    return this.users;
  }
  //====End Users====

  //====Chats====
  addChatDocument(chat: Chat) {
    this.chatsCollection.add(chat);
  }
  getChatDocument(): Observable<Chat> {
    return (this.chat = this.chatDocument.valueChanges());
  }
  setChatDocument(id: string) {
    this.chatDocument = this.db.doc<Chat>(`${this.USERS_URL}${id}`);
  }
  removeChatDocument(id: string) {
    this.setChatDocument(id);
    this.chatDocument.delete();
  }
  updateChatDocument(id: string, data: Chat) {
    this.setUserDocument(id);
    this.userDocument.update(data);
  }
  getChats(): Observable<Chat[]> {
    return this.chats;
  }
  //====End Chats====
}
