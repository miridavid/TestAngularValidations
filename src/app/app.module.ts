import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { WelcomComponent } from './components/welcom/welcom.component';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    WelcomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
