import {Error} from "tslint/lib/error";

export class UserModel {
  private _firstName: string;
  private _lastName: string;
  private _age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  public getFirstName(): string {
    return this._firstName;
  }

  public setFirstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error('Invalid first name.');
    }
    this._firstName = theFirstName;
  }

  public getLastName(): string {
    return this._lastName;
  }

  public setLastName(theLastName: string) {
    if (!theLastName) {
      throw new Error('Invalid last name.');
    }
    this._lastName = theLastName;
  }

  public getAge(): number {
    return this._age;
  }

  public setAge(theAge: number) {
    if (theAge > 0 && theAge <= 100) {
      this._age = theAge;
    }
    throw new Error('The age is invalid');
  }
}
