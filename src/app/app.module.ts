import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MlbComponent } from './mlb/mlb.component';
import { NhlComponent } from './nhl/nhl.component';
import { NbaComponent } from './nba/nba.component';


@NgModule({
  declarations: [
    AppComponent,
    MlbComponent,
    NhlComponent,
    NbaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
