import { Giphy } from './giphy';
import {Chat} from './chat';


export interface User {

  name: string;
  email: string;
  gifs?: Giphy[]; //these are the favorite gifs
  id?: string; //assigned by firebase
  //TODO: Implement these properties
  // chats: Chat[];

}
