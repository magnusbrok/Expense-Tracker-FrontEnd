import {Subject} from 'rxjs';
import {BudgetPost} from '../budget/budgetPost.model';
import {Budget} from '../budget/budget.model';

export class BudgetPostListService {
  budgetListChange = new Subject<Budget[]>();
  budgetChanged = new Subject<Budget>();
  startedEditing = new Subject<number>();
  budgetList: Budget[] = [];
  budget: Budget = new Budget(2020, 5);



  getPost(index: number) {
    return this.budget.posts[index];
  }

  addBudgetPost(post: BudgetPost) {
    this.budget.posts.push(post);
    this.budgetChanged.next(this.budget);
    console.log(post);
  }

  updateBudgetPost(index: number, newPost: BudgetPost) {
    this.budget.posts[index] = newPost;
    this.budgetChanged.next(this.budget);
  }

  getCurrentBudget() {
    return this.budget;
  }

  deleteBudgetPost(index: number) {
    this.budget.posts.splice(index, 1);
    this.budgetChanged.next(this.budget);
  }



  getBudgets() {
    return this.budgetList.slice();
  }
  getBudget(index: number) {
    return this.budgetList[index];
  }
  addBudget(budget: Budget) {
    this.budgetList.push(budget);
    this.budgetListChange.next(this.budgetList.slice());
  }
}
