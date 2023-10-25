import { Injectable } from '@angular/core';
import { Observable, Subscriber, interval } from 'rxjs';

export interface IUser{
  id:number;
  name:string;
}



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getCounter():Observable<number>{
    return interval(1000)


  }

  getUsers():Observable<IUser[]>{
    return new Observable((subscriber)=>{
      subscriber.next([ 
        { 
        id:1,
        name:'Rocio',
        },
        {
          id:2,
          name:'Enzo'
        }
      ])
    
    });

  }
}