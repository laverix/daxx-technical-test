import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PinComponent } from './pin/pin.component';
import { OperationScreenComponent } from './operation-screen/operation-screen.component';

import {PinGuardService} from "./pin-guard.service";
import { BalanceScreenComponent } from './balance-screen/balance-screen.component';
import { CashScreenComponent } from './cash-screen/cash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PinComponent,
    OperationScreenComponent,
    BalanceScreenComponent,
    CashScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PinGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
