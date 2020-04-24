
import {Subject} from 'rxjs';
import {BudgetPost} from '../budget/budgetPost.model';
import {Budget} from '../budget/budget.model';

export class BudgetPostListService {
  budgetChange = new Subject<Budget[]>();
  postChanged = new Subject<BudgetPost[]>();
  budgetList: Budget[] = [];

  budget: Budget = new Budget(2020, 4);

  postList: BudgetPost[] = [
    new BudgetPost('TestCat', 1099),
    new BudgetPost('husleje', 5400)
  ];



  getBudgets() {
    return this.budgetList.slice();
  }
  getBudget(index: number) {
    return this.budgetList[index];
  }
  addBudget(budget: Budget) {
    this.budgetList.push(budget);
    this.budgetChange.next(this.budgetList.slice());
  }

  setPostList(posts: BudgetPost[]) {
    this.budget.postList = posts;
    this.postChanged.next(this.budget.postList.slice());
  }

  addBudgetPost(post: BudgetPost) {
    this.budget.postList.push(post);
  }
}
