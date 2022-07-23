import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SubscribedGuardService } from "./subscription/shared/subscribed-guard.service";
import { SignupComponent } from "./subscription/signup/signup.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { SuccessComponent } from "./subscription/success/success.component";

const appRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/subscription/signup" },
  {
    path: "subscription",
    component: SubscriptionComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "signup",
      },
      {
        path: "signup",
        component: SignupComponent,
      },
      {
        path: "success",
        canActivate: [SubscribedGuardService],
        component: SuccessComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
