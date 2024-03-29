import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private userUrl = 'api/users'; // Assuming this is your users API endpoint

    constructor(private http: HttpClient) {}

    getUserData(): Observable<any[]> {
        return this.http.get<any[]>('../assets/data/users.json');
    }
}
