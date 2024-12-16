import { Component, output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    users = DUMMY_USERS
    userId = signal<string>("");

    selectedUser(){
        return DUMMY_USERS.find(user => user.id === this.userId())!
    }


    onSelectedUser(id: string) {
        this.userId.set(id)
    }
}
