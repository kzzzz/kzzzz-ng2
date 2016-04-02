import {Component} from 'angular2/core';
import{RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent} from './navbar/navbar.component';
import {UsersComponent} from './users/users.component';
import {UserFormComponent} from './users/user-form.component';
import {PostsComponent} from './posts/posts.component';
import {NotFoundComponent} from './shared/not-found.component';

@RouteConfig([
    {path: '/', name: 'Users', component: UsersComponent, useAsDefault: true},
    {path: '/user/new', name: 'NewUser', component: UserFormComponent},
    {path: '/user/:id', name: 'EditUser', component: UserFormComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/not-found', name: 'NotFound', component: NotFoundComponent},
    {path: '/*other', name: 'other', redirectTo: ['Users']}
])

@Component({
    selector: 'my-app',
    directives: [
        NavbarComponent,
        UsersComponent,
        UserFormComponent,
        PostsComponent,
        NotFoundComponent,
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
