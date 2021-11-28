import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderserviceService } from './../service/loaderservice.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  articles: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private loaderService: LoaderserviceService) {}

  ionViewDidEnter(){
    this.loaderService.showLoader();
    this.route.params.subscribe(params => {
      this.apiService.getNews(params.name).subscribe((data)=>{
        this.loaderService.hideLoader();
        console.log(data);
        // eslint-disable-next-line @typescript-eslint/dot-notation
        this.articles = data['articles'];
      });
    });
  }
}
