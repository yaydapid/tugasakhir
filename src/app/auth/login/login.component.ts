import { Component } from '@angular/core';
import { NbAuthComponent, NbAuthResult, NbLoginComponent,} from '@nebular/auth';
import { LoginBateraService } from './login.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  // template : '<button (click)="login()">Login</button>'
})
export class NgxLoginComponent extends NbLoginComponent {
  // constructor(private loginService : LoginBateraService) {}
  showPassword = false;
  // getInputType() {
  //   if (this.showPassword) {
  //     return 'text';
  //   }
  //   return 'password';
  // }

  // toggleShowPass() {
  //   this.showPassword = !this.showPassword
  // }

  // errors = []
  // messages = []
  // submitted = []
  // user
  // showMessages
  
  login(): void {
    const data = {
      name : "Roganda",
      username : "roganda",
      email : 'roganda@gmail.com',
      password : 12345
    }
    // this.loginService.getVerifyLogin(data)
    // .subscribe(res => console.log(res))
    // this.router.navigateByUrl('/pages/dashboards/piping-assets')
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.service.authenticate(this.strategy, {
      email: this.user.email, 
      username: this.user.email, 
      password: this.user.password, 
      remember: this.rememberMe
    }).subscribe((result: NbAuthResult) => {
      console.log(result)
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
      if (redirect) {
          this.router.navigateByUrl(redirect);
      }
      this.cd.detectChanges();
    });


  } 
}
