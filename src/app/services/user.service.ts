import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {UsersDao} from "../dao/users.dao";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usersDao: UsersDao;

  constructor() {
    this._usersDao = new UsersDao();
  }

  public getUser(): Observable<UserModel> {
    return of(this._usersDao.getLastUser());
  }

  public setUser(user: UserModel): void {
    this._usersDao.setUser(user);
  }
}
