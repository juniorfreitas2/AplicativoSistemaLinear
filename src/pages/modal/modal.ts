import { Component } from '@angular/core';
import { ModalController, NavParams, NavController  } from 'ionic-angular';
import { ViewController} from 'ionic-angular';



@Component({
  templateUrl: 'modal.html'
})

export class Modal {
  linha: string = this.navParams.get('linha');
  coluna: string = this.navParams.get('coluna');

   constructor(public navParams: NavParams,public viewCtrl: ViewController) {

   }

   closeModal() {
    this.viewCtrl.dismiss();
  }



}
