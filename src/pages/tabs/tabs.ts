import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Sobre } from '../sobre/sobre';
import { Contato } from '../contato/contato';

/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {
  tabHome: any = HomePage;
  tabSobre: any = Sobre;
  tabContato: any = Contato;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // sair(){
  //     ionic.Platform.exitApp();
  // }
}
