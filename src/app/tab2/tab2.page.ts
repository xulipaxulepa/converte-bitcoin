import { LoaderserviceService } from './../service/loaderservice.service';
import { StorageService } from './../service/storageservice.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cryptos: any;

  constructor(public storageService: StorageService, private router: Router, private loaderService: LoaderserviceService) {
  }

  ionViewDidEnter(){
    this.loaderService.showLoader();
    this.storageService.get('crypto').then((data)=>{
      this.loaderService.hideLoader();
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.cryptos = data;
      console.log(this.cryptos);
    });
  }

  toTheNews(name) {
    console.log(name);
    this.router.navigate(['/tabs/tab3', name]);
  }
}
