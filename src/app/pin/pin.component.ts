import { Component, OnInit } from '@angular/core';
import {PinGuardService} from "../pin-guard.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
  providers: [PinGuardService]
})
export class PinComponent implements OnInit {
  attempts:number = 1;
  exceed:boolean = false;

  constructor(private pinGuardService: PinGuardService, private router: Router) { }

  checkPin(event: any) {
    this.pinGuardService.checkPin(event.target.value, function (result) {
      if (result === false) {
        this.attempts++;

        if (this.attempts > 3) {
          this.lockScreen()
        }

        event.target.value = '';
      } else {
        this.router.navigate(['operations']);
      }
    }.bind(this));
  }

  lockScreen() {
    this.attempts = 1;

    this.exceed = true;

    setInterval(function () {
      this.exceed = false;
    }.bind(this), 5000);
  }

  ngOnInit() {
  }

}
