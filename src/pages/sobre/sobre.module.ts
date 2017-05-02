import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sobre } from './sobre';

@NgModule({
  declarations: [
    Sobre,
  ],
  imports: [
    IonicPageModule.forChild(Sobre),
  ],
  exports: [
    Sobre
  ]
})
export class SobreModule {}
