import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  getLoggedUser(): string {
    return localStorage.getItem('user')
  }

  setLoggedUser(user: string): void {
    return localStorage.setItem('user', user);
  }
}
