import { Mailer } from "./mailer.mjs";

export class PushNotification {
  constructor() {
    this.prototype = Mailer;
  }
}

PushNotification.sendMessage = (message) => {
  console.log(`Sending push notification - ${message}`);
};
