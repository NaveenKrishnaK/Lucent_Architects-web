import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any[] = [
    {
      id: 1,
      name: "Naveen",
      userName: "navee",
      password: "123"
    },
    {
      id: 2,
      name: "Kishore",
      userName: "kish",
      password: "098"
    }
  ];

  session: any;

  constructor(private router: Router) { }

  login(userName: string, password: string) {
    let user = this.users.find(u => u.userName === userName && u.password === password)

    if (user) {
      this.session = user;
      localStorage.setItem('session',JSON.stringify(this.session));
    }

    return user;
  }

  logOut(){
    this.session=undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl("/login");
  }
}
