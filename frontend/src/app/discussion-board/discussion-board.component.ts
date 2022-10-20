import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Subject, from, merge, Observable } from 'rxjs';
import { switchMap, map, windowCount, scan, take, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Message } from '../models/message';

///import { ChatModule, Message, User, Action, ExecuteActionEvent, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';

@Component({
  selector: 'app-discussion-board',
  templateUrl: './discussion-board.component.html',
  styleUrls: ['./discussion-board.component.css']
})
export class DiscussionBoardComponent implements OnInit {

  commentForm!: FormGroup;
  message!: FormControl;
  firstName!: string;
  Message!: any



  userId !: any;
  msgForm!: FormGroup;

  constructor(public msgService: MessageService, private ngZone: NgZone,
    public router: Router) { }

  ngOnInit(): void {
    this.msgForm = new FormGroup({

      'message': new FormControl('')
    });




  }

  onSubmit() {
    this.Message = new Message();

    console.log(localStorage.getItem(this.userId))
    // console.log(this.msgForm.value)
    return this.msgService.addMessage(this.msgForm.value).subscribe((data) => {
      this.Message = data;
      console.log(data);
      // localStorage.setItem('token', data.accessToken)
      localStorage.setItem('MessageId', data.savedMessage._id)
      data.savedMessage.Name = localStorage.getItem('userName')

      return data.message

    });
  }


  // this.userService.getUser(this.id).subscribe((data) => {
  //   this.User = data;
  //   console.log(data);
  // })

}

