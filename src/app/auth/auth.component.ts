import { Component, OnInit } from '@angular/core';
import { LoginBateraService } from './login/login.service';

@Component({
  selector: 'ngx-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private loginService : LoginBateraService
  ) { }

  ngOnInit(): void {
    // this.loginService.testAPI()
    // .subscribe(res => console.log(res))
  }

}
