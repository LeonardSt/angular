import {UserModel} from "../models/user.model";
import {Error} from "tslint/lib/error";

export class UsersDao {
  private _users: Array<UserModel>;

  public constructor() {
    this._users = [];
  }

  public getLastUser(): UserModel {
    if (this._users.length == 0) {
      throw new Error("Empty list of users");
    }
    return this._users[this._users.length - 1];
  }

  public setUser(user: UserModel) {
    this._users.push(user);
  }
}
