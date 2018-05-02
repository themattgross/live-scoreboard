import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EspnService {

  endpoint = 'https://api.stattleship.com';
  token = 'Token token=95e0de03eaa9719e71c4c372b0cff1dc';

  constructor(public http:Http) { }

  getMlb() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.token);
    headers.append('Accept', 'application/vnd.stattleship.com; version=1');

    let opts = new RequestOptions();
    opts.headers = headers;

    return this.http.get(this.endpoint + '/baseball/mlb/games?on=today', opts).map(data => data.json());
  }

  getNhl() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.token);
    headers.append('Accept', 'application/vnd.stattleship.com; version=1');

    let opts = new RequestOptions();
    opts.headers = headers;

    return this.http.get(this.endpoint + '/hockey/nhl/games?on=today', opts).map(data => data.json());
  }

  getNba() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.token);
    headers.append('Accept', 'application/vnd.stattleship.com; version=1');

    let opts = new RequestOptions();
    opts.headers = headers;

    return this.http.get(this.endpoint + '/basketball/nba/games?on=today', opts).map(data => data.json());
  }
}