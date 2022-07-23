import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SubscriptionService } from "../shared/subscription.service";
import { SubscriptionData } from "../shared/types";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent {
  @ViewChild("subscriptionForm") public form: NgForm;

  public subscriptionTypes = ["basic", "advanced", "pro"];
  public defaultSubscriptionType = "advanced";

  constructor(
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public onSubmit() {
    const { email, subscriptionType: type, password } = this.form.value;
    const data: SubscriptionData = { email, type, password };
    this.subscriptionService.updateData(data);
    this.router.navigate(["../success"], { relativeTo: this.route });
  }
}
