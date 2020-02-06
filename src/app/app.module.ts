import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerReducer } from './customer.reducer';
import { StoreModule } from '@ngrx/store';
import { CustomersViewComponent } from './customers-view/customers-view.component';

@NgModule({
  declarations: [AppComponent, CustomersViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ customers: CustomerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
