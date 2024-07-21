import { Component,EventEmitter,Input, input ,Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// type User = {
//   id :string,
//   name: string,
//   avatar: string
// }
// using type alias, type keyword
interface User {
  id : string,
  name: string,
  avatar: string

}

//using Interface
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
