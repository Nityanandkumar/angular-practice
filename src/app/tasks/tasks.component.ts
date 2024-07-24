import { Component, Input } from '@angular/core';
import { type newTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',

  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input ({required:true}) userId!: string;
  @Input({required:true}) name!: string;
  isAddTaskEnabled = false;
  constructor(private tasksService : TasksService) {}
  //constructor- dependency injection-
  // you tell angular which type of value you need and angular creates it and provides is an argument
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddTask() {
     this.isAddTaskEnabled =true;
  }
  onCloseAddTask() {
    this.isAddTaskEnabled=false;
  }
 
 }
