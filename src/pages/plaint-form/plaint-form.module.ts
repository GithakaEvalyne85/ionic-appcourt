import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaintFormPage } from './plaint-form';

@NgModule({
  declarations: [
    PlaintFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaintFormPage),
  ],
})
export class PlaintFormPageModule {}
