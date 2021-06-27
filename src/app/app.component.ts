import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { Message } from './model/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  messages: Message[] = [];
  displayBasic: boolean = false;
  constructor(private messageService: MessageService) {}
  ngOnInit() {
    this.messageService.getAllMessages().subscribe((data) => {
      this.messages = data;
    });
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  delete(id: number) {
    console.log({ id });
  }

  insert(message: Message) {
    this.messageService.createMessage(message).subscribe(
      () => {
        this.messages.push({ id: this.messages.length + 1, ...message });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
