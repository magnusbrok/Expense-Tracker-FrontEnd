import { Component, OnInit } from '@angular/core';
import {Expense} from './expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [
    new Expense(500, 'Spil', new Date(), 'købte overwatch'),
    new Expense(1000, 'Druk', new Date(), 'Mange bajer!'),
    new Expense(69, 'fornøjelse', new Date(), 'ikke porno!')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
