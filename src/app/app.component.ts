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
  displayBasicArray: boolean[] = [false, false, false];
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

  showBasicDialog(index: number) {
    console.log({ index });
    this.displayBasicArray[index] = true;
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
      (data) => {
        const array: number[] = this.messages.map(({ id }) => id) as number[];
        const id = Math.max(...array) + 1;
        this.messages.push({ id, ...message });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
