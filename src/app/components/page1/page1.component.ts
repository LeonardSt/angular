import {Component, OnInit} from '@angular/core';

import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  firstName!: string;
  lastName!: string;
  age!: number;

  public constructor(private userService: UserService) {
  }

  form = new FormGroup({
    firstNameForm: new FormControl('', Validators.required),
    lastNameForm: new FormControl('', Validators.required),
    ageForm: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  public addUser(firstName: string, lastName: string, age: number): void {
    if (firstName.match("[a-zA-Z-']+") && lastName.match("[a-zA-Z-']+") && age > 0 && age <= 100) {
      this.userService.setUser(new UserModel(firstName, lastName, age));
    }
  }
}
