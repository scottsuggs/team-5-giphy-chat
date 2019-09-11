import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../interfaces/user';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {
  transform(users: User[], query: string): User[] {
    console.log('pipe users: ', users);

    return users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
