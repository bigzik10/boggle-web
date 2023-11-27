// drawer.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private signupDrawerOpen = new BehaviorSubject<boolean>(false);
  signupDrawerOpen$ = this.signupDrawerOpen.asObservable();

  constructor() {}

  openSignupDrawer() {
    this.signupDrawerOpen.next(true);
  }

  closeSignupDrawer() {
    this.signupDrawerOpen.next(false);
  }
}
