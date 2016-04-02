import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {UserService} from './user.service';

@Component({
    selector: 'users',
    templateUrl: './dev/users/users.template.html',
    providers: [UserService],
    directives: [RouterLink]
})

export class Users implements OnInit {

    users: any[];

    constructor(private _service: UserService){
    }

    ngOnInit(){
        this._service.getUsers()
            .subscribe(users => {
                console.log(users);
                this.users = users
            });
    }
}