import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, Subject } from 'rxjs';
export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  //messageMap!:any;

  constructor() { }

  conversation = new Subject<Message[]>();

  messageMap: any = {
    "Hi": "Hello",
    "Order not shipped": "It will be updated within 2 hours from order placed time ",
    "Caugh": "Try some of our caugh medicines",
    "What is getmeds": "Getmeds is a digital pharmacy store",
    "default": "I don't have an answer for that Sorry"
  }

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));

    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: any) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}