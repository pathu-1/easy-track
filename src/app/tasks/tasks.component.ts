import uniqid from 'uniqid';
import { Component, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTask, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './task.service';

@Component({
    selector: 'app-tasks',
    imports: [TaskComponent, NewTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    id = input.required<string>();
    name = input.required<string>();
    taskAdd = signal<boolean>(false);

    constructor(private tasksService: TasksService) {}

    get selectedUserTasks() {
        return this.tasksService.getUserTasks(this.id());
    }

    onCompleteTask(id: string) {
        this.tasksService.removeTask(id);
    }

    addTask() {
        this.taskAdd.set(true);
    }

    onCloseAddTask() {
        this.taskAdd.set(false);
    }

    createNewTask(task: NewTask) {
        this.tasksService.addTask(this.id(), task);

        this.onCloseAddTask();
    }
}
