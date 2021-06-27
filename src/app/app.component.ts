import { Component } from '@angular/core';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { MessageService } from './message.service';
import { Message } from './model/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConfirmationService],
})
export class AppComponent {
  messages: Message[] = [];
  displayBasic: boolean = false;
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) {}
  ngOnInit() {
    this.messageService.getAllMessages().subscribe((data) => {
      this.messages = data;
    });
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  delete(messageId: number) {
    this.confirmationService.confirm({
      message: '確定刪除此留言?',
      accept: () => {
        this.messageService.deleteMessage(messageId).subscribe(() => {
          this.messages = this.messages.filter(({ id }) => id !== messageId);
          this.confirmationService.close();
        });
      },
      reject: () => {
        this.confirmationService.close();
      },
    });
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
