import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
import { Post } from '../../models/Post';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ConvertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convert',
  templateUrl: 'convert.html',
})
export class ConvertPage {



   // ETH
   ethUsdData: Post;
   ethEurData: Post;
   // BTC
   btcUsdData: Post;
   btcEurData: Post;
   // XRP
   xrpUsdData: Post;
   xrpEurData: Post;
   // LTC
   ltcUsdData: Post;
   ltcEurData: Post;
   // XMR
   xmrUsdData: Post;
   xmrEurData: Post;
 
   hide: boolean;
   // p1: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private DataService: DataProvider, private alertCtrl: AlertController) {
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: '',
      message: 'Are you sure lorem ipsum dolor?',
      buttons: [
        {
          text: 'Yes',
          role: 'yes',
          cssClass: 'btn-yes',
          handler: () => {
            console.log('yes clicked');
          }
        },
        {
          text: 'No',
          cssClass: 'btn-no',
          handler: () => {
            console.log('No clicked');
          }
        }
      ]
    });
    alert.present();
  }

  
    ionViewDidLoad() {
      // ETH
      this.DataService.getEthUsd().subscribe(ethUsdData => {
        this.ethUsdData = ethUsdData;
        this.ethUsdData.hide = true;
        // this.ethUsdData.p1 = 500;
        // this.ethUsdData.p2 = 1000;
        // this.ethUsdData.p3 = 800;
      });
      this.DataService.getEthEur().subscribe(ethEurData => {
        this.ethEurData = ethEurData;
        this.ethEurData.hide = true;
      });
      // BTC
      this.DataService.getBtcUsd().subscribe(btcUsdData => {
        this.btcUsdData = btcUsdData;
        this.btcUsdData.hide = true;
      });
      this.DataService.getBtcEur().subscribe(btcEurData => {
        this.btcEurData = btcEurData;
        this.btcEurData.hide = true;
      });
      // XRP
      this.DataService.getXrpUsd().subscribe(xrpUsdData => {
        this.xrpUsdData = xrpUsdData;
        this.xrpUsdData.hide = true;
      });
      this.DataService.getXrpEur().subscribe(xrpEurData => {
        this.xrpEurData = xrpEurData;
        this.xrpEurData.hide = true;
      });
      // LTC
      this.DataService.getLtcUsd().subscribe(ltcUsdData => {
        this.ltcUsdData = ltcUsdData;
        this.ltcUsdData.hide = true;
      });
      this.DataService.getLtcEur().subscribe(ltcEurData => {
        this.ltcEurData = ltcEurData;
        this.ltcEurData.hide = true;
      });
      // XMR
      this.DataService.getXmrUsd().subscribe(xmrUsdData => {
        this.xmrUsdData = xmrUsdData;
        this.xmrUsdData.hide = true;
      });
      this.DataService.getXmrEur().subscribe(xmrEurData => {
        this.xmrEurData = xmrEurData;
        this.xmrEurData.hide = true;
      });
  }

}
