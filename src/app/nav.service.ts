import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private _navSubject$ = new Subject<string>();

  constructor() {}

  get nav$() {
    return this._navSubject$.asObservable();
  }

  setNav(nav: string) {
    this._navSubject$.next(nav);
  }
}
