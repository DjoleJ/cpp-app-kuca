import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsPage } from '../contacts/contacts';
import { WalletSettingsPage } from '../wallet-settings/wallet-settings';


import { Chart } from 'chart.js';


import { DataProvider } from '../../providers/data/data';
import { Post } from '../../models/Post';




@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {



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

  

  chart = [];

  data = [
    {
      country: 'USA',
      number: 808

    },
    {
      country: 'Germany',
      number: 808

    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private DataService: DataProvider) {
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

  

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [5, 6, 7, 12, 30, 50],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
    
console.log(this.chart);
}





  onShowGraph(post: Post) {
        post.hide = !post.hide;
  }

  onGoToContacts() {
    this.navCtrl.push(ContactsPage);
   
  }

  onGoToWalletSettings() {
    this.navCtrl.push(WalletSettingsPage);
  }

}
