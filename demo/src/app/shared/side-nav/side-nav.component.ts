import {Component} from '@angular/core';
import {Router} from '@angular/router';

export const componentsList = [
  'Card', 'Accordion', 'Alert', 'Buttons', 'Modal'
];

@Component({
  selector: 'ngbd-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  components = componentsList;

  constructor(private router: Router) {}

  isActive(currentRoute: any[], exact = true): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), exact);
  }
}
