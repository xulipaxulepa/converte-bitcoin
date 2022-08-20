/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKeyNews = '4e863463056b4afb957e67f2eea9fe63';
  apiKeyCryptos = '5340c43e-3c96-408a-8cda-d0c189841db2';

  constructor(private httpClient: HttpClient) { }

  getNews(name: string){
    return this.httpClient.get(`https://newsapi.org/v2/everything?q=${name}&apiKey=${this.apiKeyNews}`);
  }

  getCryptos(cryptoCode){
   // eslint-disable-next-line max-len
   return this.httpClient.get(`https://www.mercadobitcoin.net/api/${cryptoCode}/ticker/`);
  }
}
