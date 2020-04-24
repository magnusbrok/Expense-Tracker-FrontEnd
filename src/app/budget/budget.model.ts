import {BudgetPost} from './budgetPost.model';
export class Budget {
  posts: BudgetPost[] = [];



  constructor(public year: number, public month: number ) {
  }

  calcTotalAmount() {
    let totalAmount = 0;
    for (const post of this.posts) {
      totalAmount += post.amount;
    }
    return totalAmount;

  }

}
