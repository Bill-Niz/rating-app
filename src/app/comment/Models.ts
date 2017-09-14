import {User} from '../authentication/Models';

export class Notation {
  notation: number;
  user: User;

  constructor( ) {
  }
}

export class Comment {
  _id: string;
  text: string;
  date: Date;
  notation: number;
  user: User;
  notations: Notation[];

  constructor( ) {
  }
}
