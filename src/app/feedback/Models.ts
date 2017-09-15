import {User} from '../authentication/Models';
import {Comment} from '../comment/Models';

export class Feedback {
  _id: string;
  note?: string;
  date: Date;
  rating: number;
  avgRating: number;
  user: User;
  comments: Comment[] = [];

  constructor() { }
}
