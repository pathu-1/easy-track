import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTask } from './task/task.model';
import { v4 as uuidv4 } from 'uuid';


@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = DUMMY_TASKS;

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    private saveTask() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId == userId);
    }

    addTask(userId: string, taskData: NewTask) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            ...taskData,
        });
        this.saveTask();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTask();
    }
}
