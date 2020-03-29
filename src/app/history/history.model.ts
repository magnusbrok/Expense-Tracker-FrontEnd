export class History {
  public month: string;
  public payments: number;
  public payouts: number;
  public total: number;

  constructor(month: string, payments: number, payouts: number, total: number) {
    this.month = month;
    this.payments = payments;
    this.payouts = payouts;
    this.total = total;
  }
}
