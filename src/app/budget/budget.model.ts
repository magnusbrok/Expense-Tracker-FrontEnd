import {BudgetPost} from './budgetPost.model';
export class Budget {
  totalAmount = 0;
  postList: BudgetPost[] = [];
  public date: Date;

  constructor(public year: number, public month: number ) {
    this.updateTotalAmount();
    this.date = new Date(year, month - 1);
  }

  updateTotalAmount() {
    this.totalAmount = 0;
    for (const post of this.postList) {
      this.totalAmount += post.amount;
    }
  }

  getCurrentMonth() {
    this.date = new Date(this.year, this.month);
  }
}
