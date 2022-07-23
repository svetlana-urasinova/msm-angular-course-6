import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { SubscriptionService } from "./subscription.service";

@Injectable()
export class SubscribedGuardService implements CanActivate {
  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.subscriptionService.isDataLoaded()) {
      return true;
    }

    this.router.navigate(["/"]);
  }
}
