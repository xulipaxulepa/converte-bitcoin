import { LoaderserviceService } from './../service/loaderservice.service';
import { StorageService } from './../service/storageservice.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cryptos: any;

  constructor(private apiService: ApiService,
    public storageService: StorageService,
    private router: Router,
    private loaderService: LoaderserviceService) {
  }

  ionViewDidEnter(){
    this.loaderService.showLoader();
    this.storageService.get('crypto').then((data)=>{
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.cryptos = data;
      this.cryptos.forEach((crypto, index) => {
        console.log(index);
        this.apiService.getCryptos(crypto.code).subscribe((datacrypto: any) => {
          console.log(datacrypto.ticker.last);
          this.cryptos[index].priceBRL = datacrypto.ticker.last;
          this.cryptos[index].highest = datacrypto.ticker.high;
          this.loaderService.hideLoader();
        });
      });
    });
  }

  toTheNews(name) {
    console.log(name);
    this.router.navigate(['/tabs/tab3', name]);
  }
}
