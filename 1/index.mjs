import { Mailer } from "./mailer.mjs";
import { PushNotification } from "./push-notification.mjs";

function send(message) {
  Mailer.prototype.sendMessage(message);
  PushNotification.sendMessage(message);
  smsService.prototype.sendMessage(message);
}

send("Hello world!");
