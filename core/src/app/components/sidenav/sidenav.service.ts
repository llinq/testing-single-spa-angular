import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private menuSubject = new Subject<void>();

  constructor() { }

  openMenu(): void {
    this.menuSubject.next();
  }

  onOpenMenu(): Observable<void> {
    return this.menuSubject.asObservable();
  }
}
