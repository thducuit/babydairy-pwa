import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerFormDialogComponent } from './consumer-form-dialog.component';

describe('ConsumerFormDialogComponent', () => {
  let component: ConsumerFormDialogComponent;
  let fixture: ComponentFixture<ConsumerFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
