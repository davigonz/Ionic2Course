import { Injectable } from '@angular/core';
import { Http, RequestOptions , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

    BASE_URL: string = 'http://localhost:3000';
    // BASE_URL: string = 'http://fr-docker02.solidgear.es:13000';
    LOGIN_URL: string = '/login';

    constructor(public http: Http) {
        console.log('Hello LoginService Provider');
    }

    public login(data) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.BASE_URL + this.LOGIN_URL, data, options)
            .map(result => result.json());
    }
}