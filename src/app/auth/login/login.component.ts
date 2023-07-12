import { Component } from '@angular/core';
import { NbAuthResult, NbLoginComponent,} from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {
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

  login(): void {
    const data = {
      name : "Roganda",
      username : "roganda",
      email : 'roganda@gmail.com',
      password : 12345
    }
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.service.authenticate(this.strategy, {
      email: this.user.email, 
      username: this.user.email, 
      password: this.user.password, 
      remember: this.rememberMe
    }).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
        localStorage.setItem('user', JSON.stringify(result.getResponse().body.user))
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
