import { Injectable } from "@angular/core";
import { SubscriptionData } from "./types";

@Injectable()
export class SubscriptionService {
  private dataLoaded = false;

  public data: SubscriptionData;

  public getData(): SubscriptionData {
    return this.data;
  }

  public updateData(data: SubscriptionData): void {
    this.data = { ...data };
    this.logData(data);
    this.dataLoaded = true;
  }

  public logData(data: SubscriptionData): void {
    console.log(data);
  }

  public isDataLoaded(): boolean {
    return this.dataLoaded;
  }
}
