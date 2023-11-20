import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MeuFormModule } from './meu-form/meu-form.module';
import { MeuFormComponent } from './meu-form/meu-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MeuFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
