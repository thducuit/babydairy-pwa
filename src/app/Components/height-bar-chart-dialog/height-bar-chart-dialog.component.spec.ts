import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightBarChartDialogComponent } from './height-bar-chart-dialog.component';

describe('HeightBarChartDialogComponent', () => {
  let component: HeightBarChartDialogComponent;
  let fixture: ComponentFixture<HeightBarChartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightBarChartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightBarChartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
