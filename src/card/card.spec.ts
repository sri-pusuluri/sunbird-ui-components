import {TestBed, ComponentFixture, inject} from '@angular/core/testing';
import {createGenericTestComponent} from '../test/common';

import {Component} from '@angular/core';

import {SbCardModule} from './card.module';
import {SbCard} from './card';
import {SbCardConfig} from './card-config';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

function getAlertElement(element: HTMLElement): HTMLDivElement {
  return <HTMLDivElement>element.querySelector('.alert');
}

function getCloseButton(element: HTMLElement): HTMLButtonElement {
  return <HTMLButtonElement>element.querySelector('button');
}

function getCloseButtonIcon(element: HTMLElement): HTMLSpanElement {
  return <HTMLSpanElement>element.querySelector('button > span');
}

describe('sb-card', () => {

  beforeEach(() => { TestBed.configureTestingModule({declarations: [TestComponent], imports: [SbCardModule]}); });

  it('should initialize inputs with default values', () => {
    const defaultConfig = new SbCardConfig();
    const alertCmp = TestBed.createComponent(SbCard).componentInstance;
    expect(alertCmp.dismissible).toBe(defaultConfig.dismissible);
    expect(alertCmp.type).toBe(defaultConfig.type);
  });

  it('should apply those default values to the template', () => {
    const fixture = createTestComponent('<sb-card>Cool!</sb-card>');
    const alertEl = getAlertElement(fixture.nativeElement);

    expect(alertEl.getAttribute('role')).toEqual('alert');
    expect(alertEl).toHaveCssClass('alert-warning');
    expect(alertEl).toHaveCssClass('alert-dismissible');
  });

  it('should allow specifying alert type', () => {
    const fixture = createTestComponent('<sb-card type="success">Cool!</sb-card>');
    const alertEl = getAlertElement(fixture.nativeElement);

    expect(alertEl.getAttribute('role')).toEqual('alert');
    expect(alertEl).toHaveCssClass('alert-success');
  });

  it('should allow changing alert type', () => {
    const fixture = createTestComponent('<sb-card [type]="type">Cool!</sb-card>');
    const alertEl = getAlertElement(fixture.nativeElement);

    expect(alertEl).toHaveCssClass('alert-success');
    expect(alertEl).not.toHaveCssClass('alert-warning');

    fixture.componentInstance.type = 'warning';
    fixture.detectChanges();
    expect(alertEl).not.toHaveCssClass('alert-success');
    expect(alertEl).toHaveCssClass('alert-warning');
  });

  it('should allow adding custom CSS classes', () => {
    const fixture = createTestComponent('<sb-card type="success" class="myClass">Cool!</sb-card>');
    const alertEl = getAlertElement(fixture.nativeElement);

    expect(alertEl).toHaveCssClass('alert');
    expect(alertEl).toHaveCssClass('alert-success');
    expect(alertEl).toHaveCssClass('myClass');
  });

  it('should render close button when dismissible', () => {
    const fixture = createTestComponent('<sb-card [dismissible]="true">Watch out!</sb-card>');
    const alertEl = getAlertElement(fixture.nativeElement);
    const buttonEl = getCloseButton(alertEl);
    const buttonIconEl = getCloseButtonIcon(alertEl);

    expect(alertEl).toHaveCssClass('alert-dismissible');
    expect(buttonEl).toBeTruthy();
    expect(buttonEl.getAttribute('class')).toContain('close');
    expect(buttonEl.getAttribute('aria-label')).toBe('Close');
    expect(buttonIconEl.getAttribute('aria-hidden')).toBe('true');
    expect(buttonIconEl.textContent).toBe('×');
  });

  it('should not render the close button if it is not dismissible', () => {
    const fixture = createTestComponent(`<sb-card [dismissible]="false">Don't close!</sb-card>`);
    const alertEl = getAlertElement(fixture.nativeElement);

    expect(alertEl).not.toHaveCssClass('alert-dismissible');
    expect(getCloseButton(alertEl)).toBeFalsy();
  });

  it('should fire an event after closing a dismissible alert', () => {
    const fixture =
        createTestComponent('<sb-card [dismissible]="true" (close)="closed = true">Watch out!</sb-card>');
    const alertEl = getAlertElement(fixture.nativeElement);
    const buttonEl = getCloseButton(alertEl);

    expect(fixture.componentInstance.closed).toBe(false);
    buttonEl.click();
    expect(fixture.componentInstance.closed).toBe(true);
  });

  it('should project the content given into the component', () => {
    const fixture = createTestComponent('<sb-card>Cool!</sb-card>');
    const alertEl = getAlertElement(fixture.nativeElement);

    expect(alertEl.textContent).toContain('Cool!');
  });

  it('should project content before the closing button for a11y/screen readers', () => {
    const fixture = createTestComponent('<sb-card [dismissible]="true"><span>Cool!</span></sb-card>');
    const alertEl = getAlertElement(fixture.nativeElement);

    const childElements = Array.from(alertEl.children).map(node => node.tagName.toLowerCase());
    expect(childElements).toEqual(['span', 'button']);
  });

  describe('Custom config', () => {
    let config: SbCardConfig;

    beforeEach(() => { TestBed.configureTestingModule({imports: [SbCardModule]}); });

    beforeEach(inject([SbCardConfig], (c: SbCardConfig) => {
      config = c;
      config.dismissible = false;
      config.type = 'success';
    }));

    it('should initialize inputs with provided config', () => {
      const fixture = TestBed.createComponent(SbCard);
      fixture.detectChanges();

      const alert = fixture.componentInstance;
      expect(alert.dismissible).toBe(config.dismissible);
      expect(alert.type).toBe(config.type);
    });
  });

  describe('Custom config as provider', () => {
    let config = new SbCardConfig();
    config.dismissible = false;
    config.type = 'success';

    beforeEach(() => {
      TestBed.configureTestingModule(
          {imports: [SbCardModule], providers: [{provide: SbCardConfig, useValue: config}]});
    });

    it('should initialize inputs with provided config as provider', () => {
      const fixture = TestBed.createComponent(SbCard);
      fixture.detectChanges();

      const alert = fixture.componentInstance;
      expect(alert.dismissible).toBe(config.dismissible);
      expect(alert.type).toBe(config.type);
    });
  });
});

@Component({selector: 'test-cmp', template: '', entryComponents: [SbCard]})
class TestComponent {
  name = 'World';
  closed = false;
  type = 'success';
}
