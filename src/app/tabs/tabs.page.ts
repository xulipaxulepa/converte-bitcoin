import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  pageName: string | undefined;

  constructor() {
    this.pageName = 'Converte Bitcoin';
  }

  public changeName(name: string) {
    this.pageName = name;
  }

}
