import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user'))
    this.profileDesc = [
      { title : 'Name', data : user.name },
      { title : 'Email', data : user.email }
    ] 
  }

  profileDesc : any 
}
