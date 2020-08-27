import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerFormDialogComponent } from './producer-form-dialog.component';

describe('ProducerFormDialogComponent', () => {
  let component: ProducerFormDialogComponent;
  let fixture: ComponentFixture<ProducerFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
