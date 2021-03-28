import {Component, OnInit} from '@angular/core';

import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/user.model";
import {Action} from "../../models/action.model";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  private _action: Action = Action.NOTHING;
  private _user!: UserModel;
  private _alarm!: string;

  public constructor(private userService: UserService) {
  }

  private initUser(): void {
    this.userService.getUser().subscribe(value => this._user = value);
  }

  public getUser(): UserModel {
    return this._user;
  }

  public isUserPresent(): boolean {
    return this.getUser() != null;
  }

  ngOnInit(): void {
    this.initUser();
  }

  public getAlarm(): string {
    return this._alarm;
  }

  public getAction(): Action {
    return this._action;
  }

  public checkAge(): void {
    if (this.isUserPresent()) {
      switch (this._user.getAge() >= 18) {
        case true:
          this._action = Action.WIN;
          break;
        case false:
          this._action = Action.LOSE;
          this._alarm = "Musisz mieć co najmniej 18 lat!";
          break;
        default:
          break;
      }
    }
  }
}
