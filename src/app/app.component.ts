import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ESPN Scoreboard';

  form;
  ngOnInit() {
    this.form = new FormGroup({
      league: new FormControl(null,Validators.required)
    })

    /* onSubmit(formValues) {
      console.log("hi.");
    } */
  }
}
