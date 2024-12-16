import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';
import { TasksService } from '../task.service';

@Component({
    selector: 'app-new-task',
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
    userId = input.required<string>()
    close = output<void>();
    entredTitle = '';
    entredSummary = '';
    entredDueDate = '';
    private tasksService = inject(TasksService)

    cancelAction() {
        this.close.emit();
    }

    onSubmit() {
        this.tasksService.addTask(this.userId(),{
            title: this.entredTitle,
            summary: this.entredSummary,
            dueDate: this.entredDueDate
        })

        this.cancelAction()
    }


}
