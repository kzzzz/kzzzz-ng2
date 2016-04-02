import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {BasicValidators} from '../shared/basicValidators';
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
                private _routeParams:RouteParams,
                private _service:UserService) {

        this.setFormValidation();
    }

    private setFormValidation() {
        this.form = this._fb.group({
            name: ['', Validators.required],
            email: ['', BasicValidators.email],
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

        this.title = id ? "Edit User" : "New User";

        if (!id) {
            return;
        }

        this._service
            .getUser(id)
            .subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                })
    }


    save() {

        var result;

        if(this.user.id){
            result = this._service.updateUser(this.user);
        }else{
            result = this._service.addUser(this.user);
        }

        result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['Users']);
        });
    }
}