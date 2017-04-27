import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    cadastro: any = {};
    mostrar: boolean= false;
  constructor(public navCtrl: NavController, public FormBuilder: FormBuilder) {
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

}
