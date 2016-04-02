import {Component} from 'angular2/core';
import{RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent} from './navbar/navbar.component';
import {UsersComponent} from './users/users.component';
import {UserFormComponent} from './users/user-form.component';
import {PostsComponent} from './posts/posts.component';

@RouteConfig([
    {path: '/', name: 'Users', component: UsersComponent, useAsDefault: true},
    {path: '/user/new', name: 'NewUser', component: UserFormComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/*other', name: 'other', redirectTo: ['Users']}
])

@Component({
    selector: 'my-app',
    directives: [
        NavbarComponent,
        UsersComponent,
        UserFormComponent,
        PostsComponent,
        ROUTER_DIRECTIVES
    ],
    template: `
        <nav-bar></nav-bar>
        <div class="container">
            <router-outlet></router-outlet>     
        </div>
    `,
})
export class AppComponent {

}
