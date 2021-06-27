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
  messages$: Observable<Message[]> = this.messageService.getAllMessages();
  constructor(private messageService: MessageService) {}
  ngOnInit() {}

  delete(id: number) {
    console.log({ id });
  }
}
