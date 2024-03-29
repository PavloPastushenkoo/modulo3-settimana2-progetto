import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';
import { Todo } from 'src/app/interfaces/todo.interface';

@Component({
    selector: 'app-todo-tutto',
    templateUrl: './todo-tutto.component.html',
    styleUrls: ['./todo-tutto.component.scss'],
})
export class TodoTuttoComponent implements OnInit {
    users: any[] = [];
    groupedTodos: { [userId: number]: Todo[] } = {};

    constructor(
        private todoService: TodoService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.userService.getUserData().subscribe((users) => {
            this.users = users;

            this.todoService.getTodoData().subscribe((todos) => {
                this.groupedTodos = this.groupTodosByUser(todos);
            });
        });
    }

    groupTodosByUser(todos: Todo[]): { [userId: number]: Todo[] } {
        const grouped: { [userId: number]: Todo[] } = {};
        todos.forEach((todo) => {
            if (!grouped[todo.userId]) {
                grouped[todo.userId] = [];
            }
            grouped[todo.userId].push(todo);
        });
        return grouped;
    }

    toggleCompleted(todo: Todo): void {
        todo.completed = !todo.completed;
    }
}
