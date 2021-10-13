import { Message } from ".";

export class Contact {
  name: string;
  id: string;
  chat?: Message[];
  inConversation: boolean = false;
  selectedToChat: boolean = false;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}
