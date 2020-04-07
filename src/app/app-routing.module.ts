import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BudgetComponent} from './budget/budget.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import { HistoryComponent } from './history/history.component';
import {ProfileComponent} from "./profile/profile.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  { path: 'home-page', component: HomePageComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'user', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
