import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  constructor(private db: AngularFirestore) {
    this.usersCollection = db.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }

  addUserDocument(user: User) {
    this.usersCollection.add(user);
  }
  getUsers(): Observable<User[]> {
    return this.users;
  }
}
