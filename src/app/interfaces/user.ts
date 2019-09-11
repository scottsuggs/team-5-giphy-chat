import { Giphy } from './giphy';

export interface User {
  displayName: string;
  email: string;
  gifs?: Giphy[]; //these are the favorite gifs
  id?: string; //assigned by firebase
  //TODO: Implement these properties
  //chats: Chat[]
}
