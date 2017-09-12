import * as moment from 'moment';

export class TimeUtils {

  static timeAgo(date: Date){
    return moment(date).fromNow();
  }
}
