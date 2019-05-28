import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachQuoteComponent } from './each-quote.component';

describe('EachQuoteComponent', () => {
  let component: EachQuoteComponent;
  let fixture: ComponentFixture<EachQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
