import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TodoPage } from '../todo/todo';
import { InprogressPage } from '../inprogress/inprogress';
import { DonePage } from '../done/done';

/**
 * Generated class for the PrimaryTabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-primary-tabs',
  templateUrl: 'primary-tabs.html',
})
export class PrimaryTabsPage {

  tab1Root = TodoPage;
  tab2Root = InprogressPage;
  tab3Root = DonePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimaryTabsPage');
  }

}
