import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatExpansionModule,
  MatTableModule,
  MatIconModule
} from '@angular/material';
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
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
