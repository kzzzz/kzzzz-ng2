import {Component} from 'angular2/core';
import{RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Navbar} from './components/Navbar';
import {Users} from './components/Users';
import {Posts} from './components/Posts';


@RouteConfig([
    {path: '/', name: 'Users', component: Users, useAsDefault: true},
    {path: '/posts', name: 'Posts', component: Posts},
    {path: '/*other', name: 'other', redirectTo: ['Users']}
])

@Component({
    selector: 'my-app',
    directives: [Navbar, Users, Posts, ROUTER_DIRECTIVES],
    template: `
        <nav-bar></nav-bar>
        <h1>Payments</h1>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent {

}
