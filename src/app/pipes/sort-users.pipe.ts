import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../interfaces/user';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {
  transform(users: User[], query: string): User[] {
    return users.filter(
      user =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
  }
}
