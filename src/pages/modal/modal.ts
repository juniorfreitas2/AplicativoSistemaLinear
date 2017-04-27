import { Component } from '@angular/core';
import { ModalController, NavParams, NavController  } from 'ionic-angular';



@Component({
  templateUrl: 'modal.html'
})

class Modal {

   constructor(params: NavParams) {
      console.log('UserId', params.get('userId'));
   }

 

}
