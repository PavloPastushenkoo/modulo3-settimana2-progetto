import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoUrl = 'api/todo';

  constructor(private http: HttpClient) {}

  getTodoData(): Observable<any[]> {
    return this.http.get<any[]>('../assets/data/todo.json');
  }
}
