import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefendantFormPage } from './defendant-form';

@NgModule({
  declarations: [
    DefendantFormPage,
  ],
  imports: [
    IonicPageModule.forChild(DefendantFormPage),
  ],
})
export class DefendantFormPageModule {}
