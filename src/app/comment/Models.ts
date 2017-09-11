export class Feedback {
  id: string;
  note?: string;
  date: Date;
  rating: number;

  constructor(id: string, rating: number, note?: string) {
    this.id = id;
    this.rating = rating;
    this.note = note;
    this.date = new Date();
  }
}
