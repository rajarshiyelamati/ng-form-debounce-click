import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFormDebounceClickModule } from 'projects/ng-form-debounce-click';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgFormDebounceClickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
