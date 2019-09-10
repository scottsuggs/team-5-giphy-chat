import { User } from './user';

export interface Chat {
  members: User[];
  id?: string; //assigned by firebase
}
