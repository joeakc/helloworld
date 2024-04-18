import { Component, Input, Output } from '@angular/core';
import { User } from '../user';
import { CommonModule, DatePipe } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input() user!: User;

  @Output() onDelete: EventEmitter<string>;
  
  constructor(){
    this.onDelete = new EventEmitter<string>();
  }

  deleteUser() :string {
    console.log("Delete user from user component:", this.user.email)
    this.onDelete.emit(this.user.email);
    return this.user.email;
  }

}
