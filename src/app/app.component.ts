import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ngx-spinner size="default" ></ngx-spinner>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent { }
