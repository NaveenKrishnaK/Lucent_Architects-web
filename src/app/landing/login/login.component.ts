import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  userName: string = '';
  password: any = '';
  isDisabled: boolean = true;

  ngOnInit() {
    // if (this.userName !== '' && this.password !== '') {
    //   this.isDisabled = false;
    // }
  }

  login() {
    let user = this.authService.login(this.userName, this.password);

    if (!user) {
      alert("incorrect user name and password");
    }
  }

  onClick() {
    console.log('clicked');
  }
}
