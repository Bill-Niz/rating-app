import {User} from '../authentication/Models';

export class Comment {
  _id: string;
  text: string;
  date: Date;
  notation: number;
  user: User;

  constructor(id: string, text: string, notation: number) {
    this._id = id;
    this.text = text;
    this.notation = notation;
    this.date = new Date();
  }
}
