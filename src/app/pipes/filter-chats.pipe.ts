import { Pipe, PipeTransform } from '@angular/core';

import { Chat } from '../interfaces/chat';
import { User } from '../interfaces/user';

@Pipe({
  name: 'filterChats'
})
export class FilterChatsPipe implements PipeTransform {
  transform(chats: Chat[], user: User): any {
    console.log(
      'filtered chats',
      chats.filter((chat, index) => chat.members[index].id === user.id)
    );

    return chats.filter((chat, index) => chat.members[index].id === user.id);
  }
}
