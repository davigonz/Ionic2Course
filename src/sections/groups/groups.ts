import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Group } from '../../providers/groups-service';
import { GroupsService } from '../../providers/groups-service';

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

        this.groups = groupsService.getGroups();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GroupsPage');
    }
}