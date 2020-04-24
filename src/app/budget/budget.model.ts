import {BudgetPost} from './budgetPost.model';
export class Budget {
  posts: BudgetPost[] = [];



  constructor(public year: number, public month: number ) {
  }

  updateTotalAmount() {

  }

}
