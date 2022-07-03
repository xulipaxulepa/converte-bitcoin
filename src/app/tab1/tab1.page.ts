import { StorageService } from './../service/storageservice.service';
import { Component } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cryptos: any;
  converted: boolean;
  valueToConvert: any;
  cryptoToConvert: any;
  cryptoName: any;
  cryptoValue: any;
  convertedValue: any;

  constructor(private apiService: ApiService, public storageService: StorageService, private router: Router) {}

  ionViewDidEnter(){
    this.converted = false;
    /*this.cryptoToConvert = 'Bitcoin';
    this.apiService.getCryptos().subscribe((data)=>{
      this.storageService.set('crypto', data);
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.cryptos = data['data'];
      console.log(this.cryptos);
    });*/
    this.cryptos = [
      {
        name: 'Bitcoin',
        code: 'BTC',
        priceBRL: 0,
        percentage: 0
      },
      {
        name: 'Ethereum',
        code: 'ETH',
        priceBRL: 0,
        percentage: 0
      },
      {
        name: 'Tether',
        code: 'USDT',
        priceBRL: 0,
        percentage: 0
      },
      {
        name: 'USD Coin',
        code: 'USDC',
        priceBRL: 0,
        percentage: 0
      },
      {
        name: 'Binance Coin',
        code: 'BNB',
        priceBRL: 0,
        percentage: 0
      },
      {
        name: 'Binance USD',
        code: 'BUSD',
        priceBRL: 0,
        percentage: 0
      },
      {
        name: 'XRP',
        code: 'XRP',
        priceBRL: 0,
        percentage: 0
      },
      {
        name: 'Cardano',
        code: 'ADA',
        priceBRL: 0,
        percentage: 0
      },
      {
        name: 'Solana',
        code: 'SOL',
        priceBRL: 0,
        percentage: 0
      },
      {
        name: 'Dogecoin',
        code: 'DOGE',
        priceBRL: 0,
        percentage: 0
      },
    ];
    this.storageService.set('crypto', this.cryptos);
  }

  convert() {
    console.log('Chamar a api para converter');
  }

  toTheNews() {
    this.router.navigate(['/tabs/tab3', 'bitcoin']);
  }
}
