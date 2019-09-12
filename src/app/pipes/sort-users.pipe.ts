import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../interfaces/user';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {
  transform(users: User[], query: string): User[] {
    return users.filter(user => {
      //if the user has a displayName
      if (user.displayName) {
        return (
          user.displayName.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase())
        );
        //if no displayName, just go off their email
      } else {
        return user.email.toLowerCase().includes(query.toLowerCase());
      }
    });
  }
}
