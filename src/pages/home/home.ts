import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  selectedTab = 0;
  myIndex: number;
  tabBoolean: boolean = false;



  pages = [
    { pageName: 'PaymentPage', title: 'Payment', icon: 'fa-payment', id: 'paymentTab' },
    { pageName: 'ConvertPage', title: 'Convert', icon: 'fa-exchange', id: 'convertTab' },
    { pageName: 'IndexPage', title: 'Index', icon: 'fa-index', id: 'indexTab' }
  ];

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

   onTabSelect(ev: any) {
    this.selectedTab = ev.index;

    if(this.selectedTab === 0) {
      this.tabBoolean = true;
      console.log(this.tabBoolean);
  } else {
    this.tabBoolean = false;
    console.log(this.tabBoolean);
  }
}
}
