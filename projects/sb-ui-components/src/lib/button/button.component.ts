import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sb-button',
  template: `
    <button type="button" class="sbbtn sbbtn--sm">
      <ng-content></ng-content>
    </button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() theme: string;
  @Input() align: string;

  constructor() { }

  ngOnInit() {
  }

}
