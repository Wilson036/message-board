import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './model/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'message-board';

  constructor(private messageService: MessageService) {}
  ngOnInit() {
    const message: Message = {
      name: 'wilson',
      title: 'hello',
      content: 'hello',
      createdAt: new Date(),
    };

    this.messageService.createMessage(message).subscribe((obj) => {
      console.log({ obj });
    });
  }
}
