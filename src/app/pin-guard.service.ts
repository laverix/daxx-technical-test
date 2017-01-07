import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class PinGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    let pin = sessionStorage.getItem('correctPin');
    let can = false;

    if (pin === 'true') {
      can = true;
    } else {
      this.router.navigate(['enter-pin']);

      can = false;
    }

    return can;
  }

  checkPin(givenPin, callback) {
    let correctPin = 2017;

    if (correctPin == givenPin) {
      sessionStorage.setItem('correctPin', 'true');

      callback(true);
    } else {
      callback(false);
    }
  }
}
