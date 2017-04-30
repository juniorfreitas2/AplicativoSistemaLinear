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
      x1:['',Validators.required],
      y1:['',Validators.required],
      z1:['',Validators.required],
      resultado1:['',Validators.required],

      x2:['',Validators.required],
      y2:['',Validators.required],
      z2:['',Validators.required],
      resultado2:['',Validators.required],

      x3:['',Validators.required],
      y3:['',Validators.required],
      z3:['',Validators.required],
      resultado3:['',Validators.required]
    });
  }

  alteraBoolean(){
      this.mostrar =  !this.mostrar;
  }

  presentModal(cadastro) {
    let modal = this.modalCtrl.create(Modal,cadastro.value);
    modal.present();
  }

}
