import {Component} from 'angular2/core';
import {Navbar} from './components/Navbar';
import {Users} from './components/Users';
import {Posts} from './components/Posts';

@Component({
    selector: 'my-app',
    directives: [Navbar, Users, Posts],
    template: `
        <nav-bar></nav-bar>
        <h1>Angular 2 Boilerplate</h1>
        <users></users>
        <posts></posts>
    `,
})
export class AppComponent {

}
