import {Token, User} from './authentication/Models';

export class LocalStore {

  static storeUser(user: User) {
    localStorage.setItem('str-id', user._id);
    localStorage.setItem('str-name', user.name);
    localStorage.setItem('str-token', user.token.token);
    localStorage.setItem('str-token-expires', user.token.expires);
    localStorage.setItem('str-avatar', user.avatar);
  }

  static getCurrenUser() {
    const user = new User();
    user.name = localStorage.getItem('str-name');
    user.avatar = localStorage.getItem('str-avatar');
    user._id = localStorage.getItem('str-id');

    if (!!user.name) {
      return user;
    }else {
      return null;
    }
  }

  static getApiKey() {
    const token = new Token();
    token.token = localStorage.getItem('str-token');
    token.expires = localStorage.getItem('str-token-expires');

    return token;
  }

  static logout() {

    localStorage.removeItem('str-name');
    localStorage.removeItem('str-token');
    localStorage.removeItem('str-token-expires');
    localStorage.removeItem('str-avatar');
  }

}
