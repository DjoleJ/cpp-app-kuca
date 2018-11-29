import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from '../../models/Post';


@Injectable()
export class DataProvider {

  // ETH
  ethUsdUrl: string = 'http://139.59.170.234:5000/index/eth-usd';
  ethEurUrl: string = 'http://139.59.170.234:5000/index/eth-eur';
  // BTC
  btcUsdUrl: string = 'http://139.59.170.234:5000/index/btc-usd';
  btcEurUrl: string = 'http://139.59.170.234:5000/index/btc-eur';
  // XRP
  xrpUsdUrl: string = 'http://139.59.170.234:5000/index/xrp-usd';
  xrpEurUrl: string = 'http://139.59.170.234:5000/index/xrp-eur';
  // LTC
  ltcUsdUrl: string = 'http://139.59.170.234:5000/index/ltc-usd';
  ltcEurUrl: string = 'http://139.59.170.234:5000/index/ltc-eur';
  // LTC
  xmrUsdUrl: string = 'http://139.59.170.234:5000/index/xmr-usd';
  xmrEurUrl: string = 'http://139.59.170.234:5000/index/xmr-eur';




    

//   postsUrl: string = '../../json/vendors.json';



  constructor(private http: HttpClient) {

  }

  // ETH
  getEthUsd() : Observable<Post>{
    return this.http.get<Post>(this.ethUsdUrl);
  }
  getEthEur() : Observable<Post>{
    return this.http.get<Post>(this.ethEurUrl);
  }
  // BTC
  getBtcUsd() : Observable<Post>{
    return this.http.get<Post>(this.btcUsdUrl);
  }
  getBtcEur() : Observable<Post>{
    return this.http.get<Post>(this.btcEurUrl);
  }
  // XRP
  getXrpUsd() : Observable<Post>{
    return this.http.get<Post>(this.xrpUsdUrl);
  }
  getXrpEur() : Observable<Post>{
    return this.http.get<Post>(this.xrpEurUrl);
  }
  // LTC
  getLtcUsd() : Observable<Post>{
    return this.http.get<Post>(this.ltcUsdUrl);
  }
  getLtcEur() : Observable<Post>{
    return this.http.get<Post>(this.ltcEurUrl);
  }
   // XMR
  getXmrUsd() : Observable<Post>{
    return this.http.get<Post>(this.xmrUsdUrl);
  }
  getXmrEur() : Observable<Post>{
    return this.http.get<Post>(this.xmrEurUrl);
  }



}