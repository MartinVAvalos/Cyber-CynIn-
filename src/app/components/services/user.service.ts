import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() {


  }

  dummyModel(user: User) {
    user = {
      email: 'blank',
      studentID: '999',
      firstName: 'eman',
      lastName: 'fonseca',
      isSuper: false,
      totalTime: 0,
      timeIn: 0,
      timeTracked: 0,
      lockedOut: false
    }
    return user;
  }

}
