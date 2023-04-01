import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { InputQueryComponent } from './components/input-query/input-query.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Routes, RouterModule } from "@angular/router";
import { AddDocFormComponent } from './components/add-doc-form/add-doc-form.component';

const appRoutes: Routes = [
  {path: '', component: InputQueryComponent},
  {path: 'add-doc', component: AddDocFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    ResultItemComponent,
    InputQueryComponent,
    NavbarComponent,
    AddDocFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
