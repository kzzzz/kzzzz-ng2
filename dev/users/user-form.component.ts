import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';

import {User} from './User'
import {UserService} from './user.service';

@Component({
    templateUrl: './dev/users/user-form.template.html',
    providers: [UserService]
})
export class UserFormComponent implements OnInit {

    form:ControlGroup;
    title:string;
    user = new User();

    constructor(private _fb:FormBuilder,
                private _router:Router,
                private _routeParams:RouteParams) {

        this.setFormValidation();
    }

    private setFormValidation() {
        this.form = this._fb.group({
            name: ['', Validators.required],
            email: [],
            phone: [],
            address: this._fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        })
    }

    ngOnInit():any {
        var id = this._routeParams.get('id');

        this.title = id ? "Edit User" : "New User"

        if (!id) {
            return;
        }
    }

    save(){
        console.log('form submitted!')
    }
}