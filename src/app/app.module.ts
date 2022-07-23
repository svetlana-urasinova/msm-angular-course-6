import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { SuccessComponent } from "./subscription/success/success.component";
import { SignupComponent } from "./subscription/signup/signup.component";
import { SubscriptionService } from "./subscription/shared/subscription.service";
import { SubscribedGuardService } from "./subscription/shared/subscribed-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionComponent,
    SuccessComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [SubscriptionService, SubscribedGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
