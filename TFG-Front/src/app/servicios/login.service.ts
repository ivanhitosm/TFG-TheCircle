import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loging: boolean = true;
  sesion: string[] = [];
  private loggedSubject = new BehaviorSubject<boolean>(true);
  logged = this.loggedSubject.asObservable();

  constructor() {
    // TODO document why this constructor is empty
  }

  login() {
    return this.loging;
  }
  toggleLogin() {
    this.loging = !this.loging;
    this.setlogged();
  }

  setlogged = () => {
    this.loggedSubject.next(this.loging);
  };

  storeLoging(user: string, pasword: string): void {
    this.sesion = [user, pasword];
  }
  retriveLogin() {
    if (this.sesion) {
      return this.sesion;
    } else {
      return null;
    }
  }
}
