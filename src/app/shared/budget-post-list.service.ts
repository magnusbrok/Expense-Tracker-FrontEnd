import {Subject} from 'rxjs';
import {BudgetPost} from '../budget/budgetPost.model';
import {Budget} from '../budget/budget.model';

export class BudgetPostListService {
  budgetListChange = new Subject<Budget[]>();
  budgetChanged = new Subject<Budget>();
  startedEditing = new Subject<number>();
  budgetList: Budget[] = [];
  budget: Budget;
  categoryList: string[];




  getPost(index: number) {
    return this.budget.posts[index];
  }

  addBudgetPost(post: BudgetPost) {
    this.budget.posts.push(post);
    this.budgetChanged.next(this.budget);
    this.updateCategoryList();
    console.log(post);
  }

  updateBudgetPost(index: number, newPost: BudgetPost) {
    this.budget.posts[index] = newPost;
    this.budgetChanged.next(this.budget);
    this.updateCategoryList();
  }

  getCurrentBudget() {
    return this.budget;
  }

  deleteBudgetPost(index: number) {
    this.budget.posts.splice(index, 1);
    this.budgetChanged.next(this.budget);
    this.updateCategoryList();
  }

  setBudget(budget: Budget) {
    this.budget = budget;
    this.updateCategoryList();
    this.budgetChanged.next(this.budget);

  }

  getCategoryList() {
    return this.categoryList.slice();
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

  updateCategoryList() {
    this.categoryList = [];
    for (const post of this.budget.posts) {
      this.categoryList.push(post.category.toString());
    }
  }
}
