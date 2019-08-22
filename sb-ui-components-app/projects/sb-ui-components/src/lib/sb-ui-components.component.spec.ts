import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbUiComponentsComponent } from './sb-ui-components.component';

describe('SbUiComponentsComponent', () => {
  let component: SbUiComponentsComponent;
  let fixture: ComponentFixture<SbUiComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbUiComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
