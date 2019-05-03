import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySearchComponent } from './day-search.component';

describe('DaySearchComponent', () => {
  let component: DaySearchComponent;
  let fixture: ComponentFixture<DaySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
