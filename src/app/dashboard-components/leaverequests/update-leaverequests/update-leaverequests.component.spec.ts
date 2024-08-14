import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeaverequestsComponent } from './update-leaverequests.component';

describe('UpdateLeaverequestsComponent', () => {
  let component: UpdateLeaverequestsComponent;
  let fixture: ComponentFixture<UpdateLeaverequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLeaverequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLeaverequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
