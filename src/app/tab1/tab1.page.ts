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
    this.cryptoToConvert = 'Bitcoin';
    this.apiService.getCryptos().subscribe((data)=>{
      this.storageService.set('crypto', data);
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.cryptos = data['data'];
      console.log(this.cryptos);
    });
  }

  convert() {
    this.cryptoName = this.cryptoToConvert;
    this.cryptos.forEach(element => {
      if(element.name === this.cryptoToConvert){
        this.converted = true;
        this.cryptoValue = element.quote.BRL.price;
        this.convertedValue = element.quote.BRL.price * this.valueToConvert;
      }
    });
  }

  toTheNews() {
    this.router.navigate(['/tabs/tab3', 'bitcoin']);
  }
}
