export class User {
  public username: string;
  public email: string;
  public study: string;
  public firstName: string;
  public lastName: string;

  constructor(username: string, email: string, study: string, firstName: string, lastName: string) {
    this.username = username;
    this.email = email;
    this.study = study;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
