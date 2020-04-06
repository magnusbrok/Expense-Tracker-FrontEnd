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
import {ExpenseListService} from './shared/expense-list.service';

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
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ExpenseListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
