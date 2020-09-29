import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFormDialogComponent } from './info-form-dialog.component';

describe('InfoFormDialogComponent', () => {
  let component: InfoFormDialogComponent;
  let fixture: ComponentFixture<InfoFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
