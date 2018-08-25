import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'excel-school';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.initialNavigation();
  }
}
