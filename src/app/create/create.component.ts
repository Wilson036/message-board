import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  messageForm = new FormGroup({
    name: new FormControl({ value: 'Wilson', disabled: true }),
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    createdAt: new FormControl(new Date()),
  });
  constructor() {}

  ngOnInit(): void {}
}
