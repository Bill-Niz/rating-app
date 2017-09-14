export class Token {
  token: string;
  expires: string;
}

export class User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  token: Token;

  constructor() {
    this.avatar = 'https://api.adorable.io/avatars/120/abott@adorable.png';
  }
}
