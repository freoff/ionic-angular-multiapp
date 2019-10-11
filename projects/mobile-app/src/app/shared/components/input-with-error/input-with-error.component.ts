import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
} from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { ControlContainer } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-input-with-error',
  templateUrl: './input-with-error.component.html',
  styleUrls: ['./input-with-error.component.css'],
})
export class InputWithErrorComponent implements OnInit, AfterContentInit {
  @ContentChild(IonInput, { static: false, read: NgControl })
  control: FormControl;
  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    console.log('contorl', this.control);
    this.control.valueChanges.subscribe(console.log);
  }
}
