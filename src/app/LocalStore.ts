import {Token, User} from './authentication/Models';

export class TimeUtils {

  static storeUser(user: User){
    localStorage.setItem('str-name', user.name);
    localStorage.setItem('str-token', user.token.token);
    localStorage.setItem('str-token-expires', user.token.expires);
  }

  static getCurrenUser(){
    const user = new User();
    const token = new Token();
    user.token = token
    user.name = localStorage.getItem('username');
    token.token = localStorage.getItem('str-token');
    token.expires = localStorage.getItem('str-token-expires');
  }

}
