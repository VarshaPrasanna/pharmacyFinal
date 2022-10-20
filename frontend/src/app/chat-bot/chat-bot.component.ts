import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  messages: Message[] = [];
  value!: string;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

}