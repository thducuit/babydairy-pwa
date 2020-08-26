import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTodayComponent } from './info-today.component';

describe('InfoTodayComponent', () => {
  let component: InfoTodayComponent;
  let fixture: ComponentFixture<InfoTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
