import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { Tabs } from '../tabs/tabs';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Intro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  navHome() {
    this.navCtrl.setRoot(Tabs);
  }

}
