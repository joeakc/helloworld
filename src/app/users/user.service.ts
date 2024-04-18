import { Injectable } from '@angular/core';
import { User } from './user';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : Array <User>
  constructor() { 
    this.users = [];
    let user                 = new User();
    user.firstName       = "joe";
    user.lastName        =  "abi khalil";
    user.email        =  "joe.yahoo.com";
    user.birthDate       = new Date();
    this.users.push(user);

    user                 = new User();
    user.firstName       = "tanious";
    user.lastName        =  "alam";
    user.email        =  "tanious.yahoo.com";
    user.birthDate       = new Date();
    this.users.push(user);
  }

  get_user_data (): Array<User> {
    return this.users;
  }

  deleteUser(email: string): void {
    console.log("Deleted user using service:", email)
    this.users = this.users.filter(user => user.email != email );
  }
}
