import { Routes, RouterModule } from '@angular/router';

import { OperationScreenComponent } from './operation-screen/operation-screen.component';
import { PinComponent } from './pin/pin.component';
import {PinGuardService} from "./pin-guard.service";
import {BalanceScreenComponent} from "./balance-screen/balance-screen.component";
import {CashScreenComponent} from "./cash-screen/cash-screen.component";

const routes: Routes = [
  { path: '', redirectTo: 'enter-pin', pathMatch : 'full' },
  { path: 'enter-pin', component: PinComponent },
  { path: 'operations', component: OperationScreenComponent, canActivate: [PinGuardService] },
  { path: 'show-balance', component: BalanceScreenComponent, canActivate: [PinGuardService] },
  { path: 'take-cash', component: CashScreenComponent, canActivate: [PinGuardService] }
];

export const routing = RouterModule.forRoot(routes);
