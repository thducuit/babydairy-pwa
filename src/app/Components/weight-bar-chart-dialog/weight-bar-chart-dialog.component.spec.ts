import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightBarChartDialogComponent } from './weight-bar-chart-dialog.component';

describe('WeightBarChartDialogComponent', () => {
  let component: WeightBarChartDialogComponent;
  let fixture: ComponentFixture<WeightBarChartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightBarChartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightBarChartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
