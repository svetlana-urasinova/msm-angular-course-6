import { Component, OnInit } from "@angular/core";
import { SubscriptionService } from "../shared/subscription.service";

@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
})
export class SuccessComponent implements OnInit {
  public email: string;
  public subscriptionType: string;
  public password: string;

  constructor(private subscriptionService: SubscriptionService) {}

  public ngOnInit(): void {
    const data = this.subscriptionService.getData();
    this.email = data.email;
    this.subscriptionType = data.type;
    this.password = data.password;
  }
}
