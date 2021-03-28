import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page0',
  templateUrl: './page0.component.html',
  styleUrls: ['./page0.component.css']
})
export class Page0Component implements OnInit {
  title: string = 'ANGULAR SPA';

  constructor() {
  }

  ngOnInit(): void {
  }
}
