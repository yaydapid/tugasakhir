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
    this.router.navigateByUrl('/pages/dashboards/piping-assets')
    // this.errors = [];
    // this.messages = [];
    // this.submitted = true;
    // this.service.authenticate(this.strategy, {
    //   user_email: this.user.email, 
    //   password: this.user.password, 
    //   remember: this.rememberMe
    // }).subscribe((result: NbAuthResult) => {
    //   this.submitted = false;
    //   console.log(result)
      
    //   if (result.isSuccess()) {
    //     this.messages = result.getMessages();
    //   } else {
    //     this.errors = result.getErrors();
    //   }

    //   const redirect = result.getRedirect();
    //   if (redirect) {
    //       this.router.navigateByUrl(redirect);
    //   }
    //   this.cd.detectChanges();
    // });
  } 
}
