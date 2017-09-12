import {Feedback} from '../feedback/Models';

export class Application {
  _id: string;
  name: string;
  description: string;
  image: string;
  feedbacks: Feedback[] = [];
  rating: number;

  constructor(_id: string, name: string, description: string, rating: number, image: string) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.image = image;
  }
}
