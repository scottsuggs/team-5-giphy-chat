import { Giphy } from './giphy';
import { RandomGiphy } from './random-giphy';
import { User } from './user';

export interface Chat {
  members: User[];
  id?: string; //assigned by firebase
  messages: {
    label: string;
    timestamp: string;
    content?: Giphy | RandomGiphy;
  }[];
}
