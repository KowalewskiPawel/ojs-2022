import { Mailer } from "./mailer.mjs";

const smsService = {
  sendMessage(message) {
    console.log(`Sending SMS message - ${message}`);
  },
};

smsService.prototype = Mailer;
