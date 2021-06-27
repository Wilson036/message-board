import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from '../model/message';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @Output()
  insertEvent = new EventEmitter<Message>();

  messageForm = new FormGroup({
    name: new FormControl({ value: 'Wilson', disabled: true }),
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  insert() {
    if (this.messageForm.invalid) {
      return;
    }
    const message = {
      name: 'Wilson',
      createdAt: new Date(),
      ...this.messageForm.value,
    };
    this.insertEvent.emit(message);
  }

  clear() {
    this.messageForm.reset();
    this.messageForm.controls['name'].setValue('Wilson');
  }
}
