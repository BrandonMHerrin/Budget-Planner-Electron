import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  nav = '';

  constructor(private navSrv: NavService) {}

  ngOnInit(): void {
    this.navSrv.nav$.pipe(takeUntil(this._destroy$)).subscribe((nav) => {
      this.nav = nav;
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
