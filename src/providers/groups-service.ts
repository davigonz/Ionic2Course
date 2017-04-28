import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";


export class Group {
    _id: string;
    name: string;
    description: string;
    image: string;
    users: string[];

    constructor(id: string, name: string, description: string, image: string, users: string[]) {
        this._id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.users = users;
    }
}

/*
  Generated class for the GroupsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GroupsService {

    // BASE_URL: string = 'http://localhost:3000';
    BASE_URL: string = 'http://fr-docker02.solidgear.es:13000';
    GROUPS_URL: string = '/groups';

    constructor(public http: Http) {
        console.log('Hello GroupsService Provider');
    }

    public getGroups() : Observable<Group[]> {
        return this.http.get(this.BASE_URL + this.GROUPS_URL)
            .map(result => result.json());
    }
}