
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TransactionHistoryComponent } from './transactionhistory/transactionhistory.component';

export const router: Routes = [
  { path: '', redirectTo: 'atm', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'atm', component: AtmComponent },
  { path: 'transactionhistory', component: TransactionHistoryComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);