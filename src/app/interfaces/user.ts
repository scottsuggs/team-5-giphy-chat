import { Giphy } from './giphy';

export interface User {
  name: string;
  email: string;
  gifs?: Giphy[];
}
