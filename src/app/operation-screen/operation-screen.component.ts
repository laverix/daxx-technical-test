import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-screen',
  templateUrl: './operation-screen.component.html',
  styleUrls: ['./operation-screen.component.scss']
})
export class OperationScreenComponent implements OnInit {
  operations:any = [
    {'title': 'Take cash', 'route': '/take-cash', 'icon': 'take-cash'},
    {'title': 'Show balance', 'route': '/show-balance', 'icon': 'show-balance'}
  ];

  visibleItem = 0;

  constructor() { }

  switchOperation(state) {
    let delta = (state === 'next') ? 1 : -1;

    this.visibleItem = this.visibleItem + delta;
  }

  ngOnInit() {  }
}
