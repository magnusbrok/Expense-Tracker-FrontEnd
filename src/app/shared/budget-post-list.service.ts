import {Subject} from 'rxjs';
import {BudgetPost} from '../budget/budgetPost.model';
import {Budget} from '../budget/budget.model';

export class BudgetPostListService {
  budgetListChange = new Subject<Budget[]>();
  budgetChanged = new Subject<Budget>();
  startedEditing = new Subject<number>();
  budgetList: Budget[] = [];
  budget: Budget = new Budget(2020, 4);

  setPostList(posts: BudgetPost[]) {
    this.budget.postList = posts;
    this.budgetChanged.next(this.budget);
  }

  getPostList() {
    return this.budget.postList.slice();
  }

  getPost(index: number) {
    return this.budget.postList[index];
  }

  addBudgetPost(post: BudgetPost) {
    this.budget.postList.push(post);
    this.budgetChanged.next(this.budget);
    console.log(post);
  }

  updateBudgetPost(index: number, newPost: BudgetPost) {
    this.budget.postList[index] = newPost;
    this.budgetChanged.next(this.budget);
  }

  getCurrentBudget() {
    return this.budget;
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
