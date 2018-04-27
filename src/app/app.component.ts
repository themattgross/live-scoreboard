import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EspnService } from './espn.service';
import { TodayGameList } from './today-game-list';
import { forEach } from '@angular/router/src/utils/collection';

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
  isPopulated = false;
  public todayGameList: Array<TodayGameList>;
  

  constructor(private espnService: EspnService){
    this.todayGameList = new Array<TodayGameList>();
  }

  ngOnInit() {
    this.leagues = ['MLB', 'NHL', 'NBA'];

    this.form = new FormGroup({
      league: new FormControl(null,Validators.required)
    })
  }

  populateTodayGameList(data) {
    // First loop through each game for game data
    for(let game of data.games) {
      let newGame = new TodayGameList;
      newGame.away_team_score = game.away_team_score;
      newGame.home_team_score = game.home_team_score;
      newGame.period = game.period;
      newGame.period_label = game.period_label;
      newGame.started_at = new Date(game.started_at).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      // Get team names
      for (let away_team of data.away_teams){
        if (away_team.id == game.away_team_id) {
          newGame.away_team = away_team.nickname;
        }
      }
      for (let home_team of data.home_teams){
        if (home_team.id == game.home_team_id) {
          newGame.home_team = home_team.nickname;
        }
      }
      // Send it to the array
      this.todayGameList.push(newGame);
    }
    this.isPopulated = true;
  }

  getMlb(): void{this.espnService.getMlb().subscribe(data => this.populateTodayGameList(data))};

  onSubmit(formValues) {
    console.log(formValues);
    if (formValues = 'MLB'){
      this.getMlb();
    }
  }
}
