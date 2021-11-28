import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderserviceService {

  constructor(
    public loadingController: LoadingController
  ) { }

  // Show the loader for infinite time
  showLoader() {

    this.loadingController.create({
      message: 'Aguarde...',
      duration: 2000
    }).then((res) => {
      res.present();
    });

  }

  // Hide the loader if already created otherwise return error
  hideLoader() {

    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });

  }
}
