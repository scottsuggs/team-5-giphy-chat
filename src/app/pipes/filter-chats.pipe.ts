import { Pipe, PipeTransform } from '@angular/core';

import { Chat } from '../interfaces/chat';
import { User } from '../interfaces/user';

@Pipe({
  name: 'filterChats'
})
export class FilterChatsPipe implements PipeTransform {
  transform(chats: Chat[], user: User): any {
    let matches: Chat[] = [];
    chats.forEach(chat => {
      chat.members.forEach(member => {
        if (member.id == user.id) {
          matches.push(chat);
        }
      });
    });
    console.log('matches', matches);

    return matches;
  }
}
