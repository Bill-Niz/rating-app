import {User} from '../authentication/Models';
import {Comment} from '../comment/Models';

export class Feedback {
  _id: string;
  note?: string;
  date: Date;
  rating: number;
  user: User;
  comments: Comment[] = [];

  constructor(id: string, rating: number, note?: string) {
    this._id = id;
    this.rating = rating;
    this.note = note;
    this.date = new Date();
  }
}
