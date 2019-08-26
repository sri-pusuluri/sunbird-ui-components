import {Injectable} from '@angular/core';

/**
 * A configuration service for the [SbCard](#/components/alert/api#SbCard) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all alerts used in the application.
 */
@Injectable({providedIn: 'root'})
export class SbCardConfig {
  dismissible = true;
  type = 'warning';
}
