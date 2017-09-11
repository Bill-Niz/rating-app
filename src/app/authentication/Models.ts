export class User {
  id: string;
  name: string;
  email: string;
  avatar: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.avatar = 'https://api.adorable.io/avatars/275/abott@adorable.png';
  }
}
