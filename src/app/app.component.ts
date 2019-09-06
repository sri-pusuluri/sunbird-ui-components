import { Component, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscription: Subscription;

  constructor(public router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
        console.log(router, 'value is');
      }
  });
  }
  showSidebar = false;
  title = 'docs';
  selectedlink;

  displayMatchedLocationPath(val) {
    this.selectedlink = val;
  }

}