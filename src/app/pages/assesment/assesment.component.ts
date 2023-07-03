import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-assesment',
  template: `
    <!-- <ngx-top-bar></ngx-top-bar> -->
    <router-outlet></router-outlet>
  `,
})
export class AssesmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
