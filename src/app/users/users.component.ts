import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ CommonModule, UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users : Array<User>

  constructor(private userService : UserService){
   this.users = userService.get_user_data();
  }

  deleteUser(email:string){
    this.userService.deleteUser(email);
    this.users = this.userService.get_user_data();
  }

}
