import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Group, GroupsService } from '../../providers/groups-service';
import { ChatPage} from '../../pages/chat/chat';

/*
  Generated class for the Groups section.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'groups-section',
    templateUrl: 'groups.html',
    providers: [GroupsService]
})

export class GroupsSection {

    private groups: Group[];

    constructor(private groupsService: GroupsService, public navCtrl: NavController) {

    }

    private showChat($event) {
        this.navCtrl.push(ChatPage, {
            group: $event
        });
    }

    ngOnInit() {
        this.groupsService.getGroups().subscribe(
            data => {
                this.groups = data;
            },
            err => {
                console.log("Ouch!");
            }
        );
    }
}