import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { History} from './history.model';


@Injectable()
export class HistoryService {
  historyChanged = new Subject<History[]>();
  historySelected = new EventEmitter<History>();

  private histories: History[] = [
    new History('January', 35000, 36000, -1000),
    new History('February', 34000, 32000, 2000)
  ];

  getHistories() {
    return this.histories.slice();
  }
}
