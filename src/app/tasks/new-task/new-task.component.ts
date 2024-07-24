import { Component, EventEmitter,Output,inject,Input } from '@angular/core';
import { newTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
/*for the sake of registering ngModule we importing FormsModule. 
Forms Module is an collection of directives and features that help ypu with dealing the forms and with user input */

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close=new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService =inject(TasksService);
  //inject function is an alternative of constructive based approch

onCancel() {
this.close.emit();
}
onSubmit() {
   this.tasksService.CreateAddTask({
     title : this.enteredTitle,
     summary: this.enteredSummary,
     date: this.enteredDate,
   }, this.userId)
   this.close.emit();
}
}
