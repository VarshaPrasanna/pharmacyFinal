import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-manage-query',
  templateUrl: './manage-query.component.html',
  styleUrls: ['./manage-query.component.css']
})
export class ManageQueryComponent implements OnInit {

  reply!: FormControl;
  replyForm!: FormGroup;
  messages: any;
  messageId: any;

  constructor(private msgService: MessageService) {
    this.getMessages();
    //console.log(this.messages);
  }

  ngOnInit(): void {
    this.replyForm = new FormGroup({
      'reply': new FormControl('')
    });
  }

  getMessages() {
    this.msgService.getAllMessages().subscribe((data: any) => {
      this.messages = data['msg'];
      console.log(this.messages)
    })
  }

  getMessageId(id: any){
    this.messageId = id;
    console.log("messageId", this.messageId)
  }

  addReply(){
    console.log("add reply");
    this.msgService.updateMessage({
      'replies':this.replyForm.value.reply
    }, this.messageId).subscribe((data) => {
      console.log(data);
    })
    window.location.reload();
  }
}
