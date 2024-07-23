import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

onCancel() {
this.cancel.emit();
}
}
