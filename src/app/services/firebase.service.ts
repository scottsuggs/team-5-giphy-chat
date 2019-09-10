import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private usersCollection: AngularFirestoreCollection<User>;
  private userDocument: AngularFirestoreDocument<User>;
  private USERS_URL = 'users/';
  users: Observable<User[]>;
  user: Observable<User>;
  constructor(private db: AngularFirestore) {
    this.usersCollection = db.collection<User>('users');
    this.users = this.usersCollection.valueChanges({ idField: 'id' });
  }

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
}
