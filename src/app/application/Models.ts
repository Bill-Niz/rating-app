import {Feedback} from '../feedback/Models';

export class Application {
  id: string;
  name: string;
  description: string;
  image: string;
  feedbacks: Feedback[] = [];
  rating: number;

  constructor(id: string, name: string, description: string, rating: number, image: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.image = image;
  }
}
