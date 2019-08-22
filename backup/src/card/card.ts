import {
  Component,
  Directive,
  Output,
  EventEmitter,
  ContentChild,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  TemplateRef,
  Input,
  AfterContentChecked
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
    `,
  styleUrls: ['./card.scss']
})

export class SbCard implements OnInit, AfterContentChecked  {
  @ContentChild(SbCardTitle, {read: TemplateRef, static: false}) sbCardTitle: TemplateRef<any>| null = null ;
  ngAfterContentChecked() {
  }

  constructor(config: SbCardConfig, private _renderer: Renderer2, private _element: ElementRef) {
  }

  ngOnInit() { }
}
