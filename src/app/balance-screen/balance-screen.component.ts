import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance-screen',
  templateUrl: './balance-screen.component.html',
  styleUrls: ['./balance-screen.component.scss']
})
export class BalanceScreenComponent implements OnInit {

  constructor(private router: Router) { }

  exit() {
    sessionStorage.clear();

    this.router.navigate(['enter-pin']);
  }

  back() {
    this.router.navigate(['operations']);
  }

  ngOnInit() {
  }

}
