import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { History} from './history.model';


@Injectable()
export class HistoryService {
  historyChanged = new Subject<History[]>();
  historySelected = new EventEmitter<History>();

  private histories: History[] = [
    new History('January', 35000, 36000, -1000),
    new History('February', 34000, 32000, 2000),
    new History('March', 41000, 42000, -1000),
    new History('April', 39000, 41000, -2000),
    new History('May', 34000, 32000, 2000),
    new History('June', 41000, 42000, -1000),
    new History('July', 35000, 36000, -1000),
    new History('August', 34000, 32000, 2000),
    new History('September', 41000, 42000, -1000),
    new History('October', 41000, 42000, -1000),
    new History('November', 41000, 42000, -1000),
    new History('December', 41000, 42000, -1000)
  ];

  getHistories() {
    return this.histories.slice();
  }
}
