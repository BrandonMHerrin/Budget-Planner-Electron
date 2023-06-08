import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private navSrv: NavService) {}

  ngOnInit(): void {
    this.navSrv.setNav('Categories');
  }
}
