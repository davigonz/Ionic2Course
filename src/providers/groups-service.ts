import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


export class Group {
    id: string;
    name: string;
    description: string;
    image: string;
    users: string[];

    constructor(id: string, name: string, description: string, image: string, users: string[]) {
        this.id = id;
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

    private groups = [
        new Group("1", "Bar de Moe", "", "moebar.jpg", ["1", "2", "3"]),
        new Group("2", "Central Nuclear", "", "nuclear.jpeg", ["4"]),
        new Group("3", "Iglesia", "", "church.jpg", ["1","2","5"])
    ];

    constructor(public http: Http) {
        console.log('Hello GroupsService Provider');
    }

    public getGroups() : Group[] {
        return this.groups;
    }
}