import { Component } from '@angular/core';
import { ModalController, NavParams, NavController  } from 'ionic-angular';
import { ViewController} from 'ionic-angular';



@Component({
  templateUrl: 'modal.html'
})

export class Modal {
  x1: number = Number(this.navParams.get('x1'));
  x2: number = Number(this.navParams.get('x2'));
  teste:number;

   constructor(public navParams: NavParams,public viewCtrl: ViewController) {
       console.log(typeof this.x1);
       this.teste = this.x1 + this.x2;
   }

   closeModal() {
    this.viewCtrl.dismiss();
  }





}
