import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { EspnService } from './espn.service';

import { AppComponent } from './app.component';
import { MlbComponent } from './mlb/mlb.component';
import { NhlComponent } from './nhl/nhl.component';
import { NbaComponent } from './nba/nba.component';

export const ROUTES: Routes = [
  { path: '', component: AppComponent,
    children: [
      { path: 'mlb', component: MlbComponent },
      { path: 'nhl', component: NhlComponent },
      { path: 'nba', component: NbaComponent },
    ],
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MlbComponent,
    NhlComponent,
    NbaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EspnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
