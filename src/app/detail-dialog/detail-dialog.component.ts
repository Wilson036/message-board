import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../model/message';

@Component({
  selector: 'detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss'],
})
export class DetailDialogComponent implements OnInit {
  @Input()
  message: Message = { name: 'wilson', title: '', content: '' };
  constructor() {}

  ngOnInit(): void {}
}
