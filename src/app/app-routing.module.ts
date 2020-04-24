import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BudgetComponent} from './budget/budget.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import { HistoryComponent } from './history/history.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthenticationGuard} from './authentication/authentication.guard';
import {FrontPageComponent} from './front-page/front-page.component';

const appRoutes: Routes = [
  {path: '', component: FrontPageComponent},
  // {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  { path: 'home-page', component: HomePageComponent, canActivate: [AuthenticationGuard] },
  { path: 'budget', component: BudgetComponent, canActivate: [AuthenticationGuard]},
  { path: 'history', component: HistoryComponent, canActivate: [AuthenticationGuard] },
  { path: 'expenses', component: ExpensesComponent, canActivate: [AuthenticationGuard] },
  { path: 'authentication', component: AuthenticationComponent, },
  { path: 'user', component: ProfileComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
