import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'lib-ion-item-e',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
    <ng-container #errorsContainer></ng-container>
  `,
  styles: [],
})
export class IonItemEComponent implements OnInit {
  @ViewChild('errorsContainer', { static: true, read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;
  constructor() {}

  ngOnInit() {}
}
