import { Component,EventEmitter,Input, input ,Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required:true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required:true}) name!: string;
   //avatar = input.required<string>(); input function produces Inputsignal
   @Output() select = new EventEmitter<string>();
   // output decorator, Event emitter object
   //select = Output<string>(); output function

     get imagePath() {
      return 'assets/users/'+ this.avatar;
     }

   onSelectUser() {
    this.select.emit(this.id);
   }
}
