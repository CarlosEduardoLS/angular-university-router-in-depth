import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
import { AuthStore } from "./auth.store";

@Injectable()
export class CanLoadAuthGuard implements CanLoad {
  constructor(
    private readonly auth: AuthStore,
    private readonly router: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.auth.isLoggedIn$.pipe(
      first(),
      tap((loggedIn) => {
        if (!loggedIn) this.router.navigateByUrl("/login");
      })
    );
  }
}
