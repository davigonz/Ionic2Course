import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

    private messages : Message[] = [
        new Message("1", "Hola, qué tal?", {"image": "lisa-simpson.png" }, "1"),
        new Message("2", "Múltiplícate por 0", {"image": "bart-simpson.png" }, "1"),
        new Message("3", "Bart! Habla bien!", {"image": "marge-simpson.png" }, "1")
    ]

    constructor(public http: Http) {
        console.log('Hello MessagesService Provider');
    }

    public getMessages() : Message[] {
        return this.messages;
    }
}
