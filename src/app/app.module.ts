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
import { HistoryListComponent } from './history/history-list/history-list.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './authentication/authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import {ExpenseListService} from './shared/expense-list.service';
import {AuthenticationGuard} from './authentication/authentication.guard';
import { FrontPageComponent } from './front-page/front-page.component';
import {BudgetPostListService} from './shared/budget-post-list.service';
import { BudgetPostEditComponent } from './budget-post-edit/budget-post-edit.component';
import {HistoryService} from './history/history.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { HistoryComponent} from './history/history.component';
import {HistoryItemComponent} from './history/history-list/history-item/history-item.component';
import {HistoryDetailComponent} from './history/history-detail/history-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    BudgetComponent,
    ExpensesComponent,
    HistoryListComponent,
    HomePageComponent,
    ExpenseEditComponent,
    DropdownDirective,
    ProfileComponent,
    ChangePasswordComponent,
    DropdownDirective,
    FrontPageComponent,
    BudgetPostEditComponent,
    HistoryComponent,
    HistoryItemComponent,
    HistoryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [AuthenticationService, AuthenticationGuard, ExpenseListService, BudgetPostListService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
