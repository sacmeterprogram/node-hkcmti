import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TransactionHistoryComponent } from './transactionhistory/transactionhistory.component';

import { routes } from './app.router';
import { NavComponent } from './nav/nav.component';
import { BankService } from './bank.service';
import { LastThreePipe } from './last-three.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    NavComponent,
    TransactionHistoryComponent,
    LastThreePipe
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule
  ],
  providers: [BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
