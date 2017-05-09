import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contato } from './contato';

@NgModule({
  declarations: [
    Contato,
  ],
  imports: [
    IonicPageModule.forChild(Contato),
  ],
  exports: [
    Contato
  ]
})
export class ContatoModule {}
