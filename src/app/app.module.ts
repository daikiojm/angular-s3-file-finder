import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCheckboxModule, MatListModule, MatToolbarModule, MatCardModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
