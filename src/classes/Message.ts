export class Message {
  message: string;
  sender: string;
  recipient: string;
  timestamp: number;

  constructor(message: string, sender: string, recipient: string) {
    this.message = message;
    this.sender = sender;
    this.recipient = recipient;
    this.timestamp = new Date().getTime();
  }
}
