import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cash-screen',
  templateUrl: './cash-screen.component.html',
  styleUrls: ['./cash-screen.component.scss']
})

export class CashScreenComponent implements OnInit {
  print: boolean = false;

  constructor(private router: Router) { }

  exit() {
    sessionStorage.clear();

    this.router.navigate(['enter-pin']);
  }

  back() {
    this.router.navigate(['operations']);
  }

  takeCash() {
    this.print = true;
  }


  ngOnInit() {  }
}
