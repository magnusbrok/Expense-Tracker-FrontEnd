import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { BudgetComponent } from './budget/budget.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import { ExpenseEditComponent } from './expenses/expense-edit/expense-edit.component';
import {FormsModule} from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { HistoryComponent } from './history/history.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './authentication/authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import {ExpenseListService} from './shared/expense-list.service';
import {AuthenticationGuard} from './authentication/authentication.guard';
import { FrontPageComponent } from './front-page/front-page.component';
import {BudgetPostListService} from './shared/budget-post-list.service';
import { BudgetPostEditComponent } from './budget-post-edit/budget-post-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    BudgetComponent,
    ExpensesComponent,
    HistoryComponent,
    HomePageComponent,
    ExpenseEditComponent,
    DropdownDirective,
    ProfileComponent,
    ChangePasswordComponent,
    DropdownDirective,
    FrontPageComponent,
    BudgetPostEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, AuthenticationGuard, ExpenseListService, BudgetPostListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
