import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { History} from './history.model';


@Injectable()
export class HistoryService {
  historyChanged = new Subject<History[]>();

  private histories: History[] = [];

  setHistories(histories: History[]) {
    this.histories = histories;
    this.historyChanged.next(this.histories.slice());
  }

  getHistories() {
    return this.histories.slice();
  }

  getHistory(index: number) {
    return this.histories[index];
  }

  addHistory(history: History) {
    this.histories.push(history);
    this.historyChanged.next(this.histories.slice());
  }

  updateHistory(index: number, newHistory: History) {
    this.histories[index] = newHistory;
    this.historyChanged.next(this.histories.slice());
  }

  deleteHistory(index: number) {
    this.histories.splice(index, 1);
    this.historyChanged.next(this.histories.slice());
  }
}
