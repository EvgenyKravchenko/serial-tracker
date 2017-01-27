import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Observable } from "rxjs";
import { User } from "./User";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  private user: User;
  private user$: Observable<User>;

  static UNAUTHORIZED_ROOT = '/search';

  constructor(private af: AngularFire, private router: Router) {
    this.user$ = this.af.auth.map(authInfo => {
      if (authInfo) {
        return new User(
          authInfo.auth.providerData[0]['displayName'],
          authInfo.uid,
          authInfo.auth.providerData[0]['email']
        );
      }

      return null;
    })
      .do(user => this.user = user);

    this.user$.subscribe();
  }

  public isLoggedIn() {
    return !!this.user;
  }

  public login() {
    this.af.auth.login().then(() => {
      this.router.navigateByUrl('/tracker');
    });
  }

  public getUser$() {
    return this.user$;
  }

  public logout() {
    this.af.auth.logout();
  }

  getUserId() {
    return this.user.uid;
  }
}
