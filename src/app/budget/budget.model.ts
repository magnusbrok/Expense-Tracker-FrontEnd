import {BudgetPost} from './budgetPost.model';
export class Budget {
  totalAmount = 0;
  postList: BudgetPost[] = [];
  public date: Date;

  constructor(public year: number, public month: number ) {
    this.postList = [
      new BudgetPost('El', 1099),
      new BudgetPost('husleje', 5400)
    ];

    this.updateTotalAmount();
  }

  updateTotalAmount() {
    for (const post of this.postList) {
      this.totalAmount += post.amount;
    }
  }

  getCurrentMonth() {
    this.date = new Date(this.year, this.month);
  }
}
