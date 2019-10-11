import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-error-field',
  templateUrl: './error-field.component.html',
  styleUrls: ['./error-field.component.css']
})
export class ErrorFieldComponent implements OnInit {
  @Input() errorMsg: string;
  constructor() { }

  ngOnInit() {
  }

}
