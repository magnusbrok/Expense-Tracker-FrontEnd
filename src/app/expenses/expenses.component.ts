import { Component, OnInit } from '@angular/core';
import {Expense} from './expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [
    new Expense(500, 'Spil', new Date(2019, 11, 17), 'købte overwatch'),
    new Expense(1000, 'Druk', new Date(2020, 3, 24), 'Mange bajer!'),
    new Expense(69, 'fornøjelse', new Date(2022, 1, 12), 'ikke porno!')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
