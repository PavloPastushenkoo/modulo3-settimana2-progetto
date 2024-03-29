import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';
import { Todo } from 'src/app/interfaces/todo.interface';

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
    users: any[] = [];
    groupedCompletedTodos: { [userId: number]: Todo[] } = {};

    constructor(
        private todoService: TodoService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.userService.getUserData().subscribe((users) => {
            this.users = users;

            this.todoService.getTodoData().subscribe((todos) => {
                this.groupedCompletedTodos =
                    this.groupCompletedTodosByUser(todos);
            });
        });
    }

    groupCompletedTodosByUser(todos: Todo[]): { [userId: number]: Todo[] } {
        const grouped: { [userId: number]: Todo[] } = {};
        const completedTodos = todos.filter((todo) => todo.completed); // Filtra solo le todo completate
        completedTodos.forEach((todo) => {
            if (!grouped[todo.userId]) {
                grouped[todo.userId] = [];
            }
            grouped[todo.userId].push(todo);
        });
        return grouped;
    }

    toggleCompleted(todo: Todo): void {
        // Non è necessario per i todo completati
    }
}
