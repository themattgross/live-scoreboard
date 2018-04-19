import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ESPN Scoreboard';

  form;
  ngOnInit() {
    this.form = new FormGroup({
      league: new FormControl("",Validators.required)
    })
  }
}
