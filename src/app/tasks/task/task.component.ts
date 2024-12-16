import { Component, inject, input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../task.service';

@Component({
    selector: 'app-task',
    imports: [CardComponent, DatePipe],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {
    task = input.required<Task>();
    private tasksService = inject(TasksService);

    onTaskComplete(){
        this.tasksService.removeTask(this.task().id)
    }
}
