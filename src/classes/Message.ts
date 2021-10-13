export class Message {
  message: string;
  sender: string;
  recipient: string;
  timestamp: number;
  outGoing: boolean = true;

  constructor(
    message: string,
    sender: string,
    recipient: string,
    outGoing?: boolean
  ) {
    this.message = message;
    this.sender = sender;
    this.recipient = recipient;
    this.timestamp = new Date().getTime();
    if (outGoing === false) {
      this.outGoing = outGoing;
    }
  }
}
