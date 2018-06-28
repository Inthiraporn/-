import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kd',
  templateUrl: 'kd.html',
})
export class KdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad KdPage');
  }

}
