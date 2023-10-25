import { Component, OnDestroy } from '@angular/core';
import { IUser, UsersService } from './users.service';
import { Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy {

  users$:Observable<IUser[]>;
  counter=0; 
  counterSubscription:Subscription;


  constructor(private usersService:UsersService){

    this.users$=this.usersService.getUsers();

    this.counterSubscription=this.usersService.getCounter().pipe(
      take(3)
    ).subscribe({
      next:(v)=>{
        console.log(v)
        this.counter=v;
      },
    })



  }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe()
  }

}
