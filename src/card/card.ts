import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  TemplateRef
} from '@angular/core';

import {SbCardConfig} from './card-config';

@Directive({selector: 'ng-template[sbCardTitle]'})
export class SbCardTitle {
  constructor(public templateRef: TemplateRef<any>) {}
}
@Directive({selector: 'ng-template[sbCardTopic1]'})
export class SbCardTopic1 {
  constructor(public templateRef: TemplateRef<any>) {}
}
@Directive({selector: 'ng-template[sbCardTopic2]'})
export class SbCardTopic2 {
  constructor(public templateRef: TemplateRef<any>) {}
}
@Directive({selector: 'ng-template[sbCardOrg]'})
export class SbCardOrg {
  constructor(public templateRef: TemplateRef<any>) {}
}
@Directive({selector: 'ng-template[sbCardLabel]'})
export class SbCardLabel {
  constructor(public templateRef: TemplateRef<any>) {}
}
@Directive({selector: 'ng-template[sbCardSubject]'})
export class SbCardSubject {
  constructor(public templateRef: TemplateRef<any>) {}
}
@Directive({selector: 'ng-template[sbCardMedium'})
export class SbCardMedium {
  constructor(public templateRef: TemplateRef<any>) {}
}
@Directive({selector: 'ng-template[sbCardClass'})
export class SbCardClass {
  constructor(public templateRef: TemplateRef<any>) {}
}


@Component({
  selector: 'sb-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {'role': 'alert', 'class': 'alert', '[class.alert-dismissible]': 'dismissible'},
  template: `
    <ng-content></ng-content>
    `,
  styleUrls: ['./card.scss']
})



export class SbCard implements OnInit, OnChanges {
  /**
   * If `true`, alert can be dismissed by the user.
   *
   * The close button (×) will be displayed and you can be notified
   * of the event with the `(close)` output.
   */
  @Input() dismissible: boolean;
  /**
   * Type of the alert.
   *
   * Bootstrap provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
   * `'secondary'`, `'light'` and `'dark'`.
   */
  @Input() type: string;
  /**
   * An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
   */
  @Output() close = new EventEmitter<void>();

  constructor(config: SbCardConfig, private _renderer: Renderer2, private _element: ElementRef) {
    this.dismissible = config.dismissible;
    this.type = config.type;
  }

  closeHandler() { this.close.emit(null); }

  ngOnChanges(changes: SimpleChanges) {
    const typeChange = changes['type'];
    if (typeChange && !typeChange.firstChange) {
      this._renderer.removeClass(this._element.nativeElement, `alert-${typeChange.previousValue}`);
      this._renderer.addClass(this._element.nativeElement, `alert-${typeChange.currentValue}`);
    }
  }

  ngOnInit() { this._renderer.addClass(this._element.nativeElement, `alert-${this.type}`); }
}
