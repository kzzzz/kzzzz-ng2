import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {
    private _url = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http:Http) {

    }

    private getUserUrl(id) {
        return `${this._url}/${id}`;
    }

    getUsers() {
        return this._http
            .get(this._url)
            .map(response => response.json());
    }

    getUser(id) {
        return this._http
            .get(this.getUserUrl(id))
            .map(response => response.json());
    }

    addUser(user) {
        return this._http
            .post(this._url, JSON.stringify(user))
            .map(response => response.json());
    }

    updateUser(user) {
        return this._http
            .put(this.getUserUrl(user.id), JSON.stringify(user))
            .map(response => response.json());
    }

    deleteUser(userId) {
        return this._http.delete(this.getUserUrl(userId))
            .map(res => res.json());
    }
}
