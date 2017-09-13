import {User} from '../authentication/Models';

export class Comment {
  _id: string;
  text: string;
  date: Date;
  notation: number;
  user: User;

  constructor( ) {
  }
}
