import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    cadastro: any = {};
	  teste: string="Hello World";
    mostrar: boolean = false;
  constructor(public navCtrl: NavController, public FormBuilder: FormBuilder) {
    this.cadastro = this.FormBuilder.group({
      nome:['',Validators.required],
      email:['',Validators.required],
      senha:['',Validators.required]
    });
  }
  alteraBoolean(){
      this.mostrar =  !this.mostrar;
  }

}
