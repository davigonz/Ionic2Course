import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

export class Message {
    id: string;
    content: string;
    user: object;
    group: string;

    constructor(id: string, content: string, user: object, group: string) {
        this.id = id;
        this.content = content;
        this.user = user;
        this.group = group;
    }
}

/*
  Generated class for the MessagesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessagesService {

    BASE_URL: string = 'http://localhost:3000';
    // BASE_URL: string = 'http://fr-docker02.solidgear.es:13000';
    GROUP_URL: string = '/group/';
    MESSAGES_URL: string = '/messages/';
    
    constructor(public http: Http) {
        console.log('Hello MessagesService Provider');
    }

    public getMessages(groupId) : Observable<Message[]> {
        return this.http.get(this.BASE_URL + this.GROUP_URL + groupId + this.MESSAGES_URL)
            .map(result => result.json());
    }
}
