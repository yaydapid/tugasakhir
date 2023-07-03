import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateProfile() {
    console.log('update profile')

  }

  profileData : any = {
    name : 'David', job : 'Director', address : 'Surabaya, Indonesia', email : 'david@gmail.com'
  }

  profileDesc : any = [
    { title : 'Name', prop : 'name' },
    { title : 'Job', prop : 'job' },
    { title : 'Address', prop : 'address' },
    { title : 'Email', prop : 'email' },
  ]

}
