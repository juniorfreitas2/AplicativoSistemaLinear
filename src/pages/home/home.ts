import { Component } from '@angular/core';
import { ModalController, NavParams, NavController  } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import { Modal } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    cadastro: any = {};
    mostrar: boolean= false;
  constructor(public navCtrl: NavController, public FormBuilder: FormBuilder,public modalCtrl: ModalController) {
    this.cadastro = this.FormBuilder.group({
      linha:['',Validators.required],
      coluna:['',Validators.required]
    });
  }

  alteraBoolean(){
      this.mostrar =  !this.mostrar;
  }

  postDados(cadastro){
    cadastro.value.linha;
    cadastro.value.coluna;
    console.log(cadastro);
  }

  presentModal() {
    let modal = this.modalCtrl.create(Modal, { userId: 8675309 }  );
    modal.present();
  }

}
