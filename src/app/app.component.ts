import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EspnService } from './espn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ESPN Scoreboard';
  leagues: String[];
  form;
  gameData;

  constructor(private espnService: EspnService){}

  ngOnInit() {
    this.leagues = ['MLB', 'NHL', 'NBA'];

    this.form = new FormGroup({
      league: new FormControl(null,Validators.required)
    })
  }

  getMlb(): void{this.espnService.getMlb().subscribe(data => this.gameData = JSON.stringify(data))};

  onSubmit(formValues) {
    console.log(formValues);
    if (formValues = 'MLB'){
      this.getMlb();
    }
  }
}
