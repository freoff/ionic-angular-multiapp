import { NgControl } from '@angular/forms';
import { IonInput, IonItem } from '@ionic/angular';
import {
  Directive,
  ViewChild,
  AfterViewInit,
  ContentChild,
  OnInit,
} from '@angular/core';

@Directive({ selector: '[control]' })
export class ControlDirective implements AfterViewInit, OnInit {
  @ContentChild(IonInput, { static: false, read: NgControl }) input: NgControl;
  constructor(private host: IonItem, view: ViewContainerRef) {
    console.log();
    // setTimeout(() => console.log(this.input), 1500);
  }
  ngAfterViewInit(): void {
    console.log(this.input);
    this.input.valueChanges.subscribe(
      (val: string) =>
        (this.host.color = val.length % 2 === 0 ? 'warning' : 'primary'),
    );
  }
  ngOnInit(): void {
    console.log(this.host);
  }
}
