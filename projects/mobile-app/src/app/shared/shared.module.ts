import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { InputWithErrorComponent } from './components/input-with-error/input-with-error.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [SharedComponent, InputWithErrorComponent],
  exports: [InputWithErrorComponent],
})
export class SharedModule {}
