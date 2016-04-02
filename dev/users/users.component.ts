import {Component, OnInit} from 'angular2/core';
import {RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

import {UserService} from './user.service';

@Component({
    selector: 'users',
    templateUrl: './dev/users/users.template.html',
    providers: [UserService],
    directives: [RouterLink, ROUTER_DIRECTIVES]
})

export class UsersComponent implements OnInit {

    users:any[];

    constructor(private _service:UserService) {
    }

    ngOnInit() {
        this._service.getUsers()
            .subscribe(users => this.users = users);
    }
}