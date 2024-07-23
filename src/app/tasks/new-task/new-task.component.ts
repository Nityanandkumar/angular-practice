import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task/task.model';
/*for the sake of registering ngModule we importing FormsModule. 
Forms Module is an collection of directives and features that help ypu with dealing the forms and with user input */

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel=new EventEmitter<void>();
  @Output() add = new EventEmitter<newTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

onCancel() {
this.cancel.emit();
}
onSubmit() {
   this.add.emit({
     title : this.enteredTitle,
     summary: this.enteredSummary,
     date: this.enteredDate,
   })
}
}
