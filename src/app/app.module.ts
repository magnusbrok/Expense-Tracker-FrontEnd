import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BudgetComponent } from './budget/budget.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HistoryComponent } from './history/history.component';
import { HomePageComponent } from './home-page/home-page.component';
import {DropdownDirective} from './budget/shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomePageComponent,
    BudgetComponent,
    ExpensesComponent,
    HistoryComponent,
    HomePageComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
