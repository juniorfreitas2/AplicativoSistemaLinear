import { Component } from '@angular/core';
import { ModalController, NavParams, NavController  } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Modal } from '../modal/modal';
import { Intro } from '../intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    cadastro: any = {};
    mostrar: boolean= false;

  constructor(public navCtrl: NavController, public storage: Storage, public FormBuilder: FormBuilder,public modalCtrl: ModalController) {
    this.cadastro = this.FormBuilder.group({
      a1:['',Validators.required],
      a2:['',Validators.required],
      a3:['',Validators.required],
      d1:['',Validators.required],

      b1:['',Validators.required],
      b2:['',Validators.required],
      b3:['',Validators.required],
      d2:['',Validators.required],

      c1:['',Validators.required],
      c2:['',Validators.required],
      c3:['',Validators.required],
      d3:['',Validators.required],

    });
  }

  ionViewDidLoad() {
    this.storage.get('intro-done').then(done => {
      if (!done) {
        this.storage.set('intro-done', true);
        this.navCtrl.setRoot(Intro);
      }
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
