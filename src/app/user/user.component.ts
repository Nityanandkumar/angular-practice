import { Component,EventEmitter,Input, input ,Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import {type User} from "./user.model";
//import type of User object. we can skip type mentioning over there
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({required:true}) user!: User;
   //user object is created and accepting object as an input
   @Output() select = new EventEmitter<string>();
   // output decorator, Event emitter object
   //select = Output<string>(); output function

     get imagePath() {
      return 'assets/users/'+ this.user.avatar;
     }

   onSelectUser() {
    this.select.emit(this.user.id);
   }
}
