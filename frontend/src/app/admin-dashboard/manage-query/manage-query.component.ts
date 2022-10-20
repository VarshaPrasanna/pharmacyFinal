import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-manage-query',
  templateUrl: './manage-query.component.html',
  styleUrls: ['./manage-query.component.css']
})
export class ManageQueryComponent implements OnInit {


  messages: any;

  constructor(private msgService: MessageService) {
    this.getMessages();
    //console.log(this.messages);
  }

  ngOnInit(): void {
  }

  getMessages() {
    this.msgService.getAllMessage().subscribe((data: any) => {
      this.messages = data;
      console.log(this.messages)
    })
  }
}
