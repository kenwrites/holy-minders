import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHolyDaysComponent } from './my-holy-days.component';

describe('MyHolyDaysComponent', () => {
  let component: MyHolyDaysComponent;
  let fixture: ComponentFixture<MyHolyDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHolyDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHolyDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
