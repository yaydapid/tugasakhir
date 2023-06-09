import { Component } from '@angular/core';
import { NbSidebarService, NbSidebarState } from '@nebular/theme';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>
      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu">
        </ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {
  state$: Observable<NbSidebarState>
  constructor(private sidebarService: NbSidebarService) {
    sidebarService.onToggle().subscribe(change => {
      this.state$ = sidebarService.getSidebarState(change.tag)
    })
  }
}
