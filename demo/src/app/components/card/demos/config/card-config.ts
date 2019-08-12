import {Component, Input} from '@angular/core';
import {SbCardConfig} from 'sunbird-ui-component';

@Component({
  selector: 'sb-card-config',
  templateUrl: './card-config.html',
  // add NgbAlertConfig  to the component providers
  providers: [SbCardConfig]
})
export class SbCardConfig {
  @Input() public alerts: Array<string> = [];

  constructor(cardConfig: SbCardConfig) {
    // customize default values of alerts used by this component tree
    cardConfig.type = 'success';
    cardConfig.dismissible = false;
  }
}
