import { Component, Injector } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { PageBaseComponent } from '../@base/page-base.component';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: ` 
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent extends PageBaseComponent {
  menu = MENU_ITEMS;

  constructor(
    injector: Injector,
    private iconLibraries: NbIconLibraries
    ) {
    super(injector);   
    this.iconLibraries.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('fab', { packClass: 'fab', iconClassPrefix: 'fa' });
    // this.iconLibraries.setDefaultPack('far');
  }

  ngOnInit() {
    // const {role} = this.user
    // this.menu = MENU_ITEMS.filter(m => m.data == undefined ? true : m.data.role.indexOf(role) > -1)
  }
}