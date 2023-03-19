import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultComponent } from './components/result/result.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { InputQueryComponent } from './components/input-query/input-query.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultComponent,
    ResultItemComponent,
    InputQueryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
