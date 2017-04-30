import { Component } from '@angular/core';
import { ModalController, NavParams, NavController  } from 'ionic-angular';
import { ViewController} from 'ionic-angular';



@Component({
  templateUrl: 'modal.html'
})

export class Modal {
  x1: number = this.navParams.get('x1');
  x2: number = this.navParams.get('x2');
  teste:number;

   constructor(public navParams: NavParams,public viewCtrl: ViewController) {

   }

   closeModal() {
    this.viewCtrl.dismiss();
  }
  resultado(){
      this.teste = this.x1 + this.x2;
  }



}
