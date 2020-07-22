import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { NewOrdersComponent } from './new-orders/new-orders.component';
import { FailedOrdersComponent } from './failed-orders/failed-orders.component';
import { ArchiveOrdersComponent } from './archive-orders/archive-orders.component';
import { SuccessOrdersComponent } from './success-orders/success-orders.component';
import {CountdownModule} from 'ngx-countdown';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { NeworderDetailsComponent } from './new-orders/neworder-details/neworder-details.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NewOrdersComponent,
    FailedOrdersComponent,
    ArchiveOrdersComponent,
    SuccessOrdersComponent,
    NeworderDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[NeworderDetailsComponent]
})
export class AppModule { }
