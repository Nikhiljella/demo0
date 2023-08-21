import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoverAlertComponent } from './popover-alert.component';

describe('PopoverAlertComponent', () => {
  let component: PopoverAlertComponent;
  let fixture: ComponentFixture<PopoverAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopoverAlertComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide alert', () => {
    spyOn(component.alertRef, 'hide');
    component.hideAlert();
    expect(component.alertRef.hide).toHaveBeenCalled();
  });

  // You can add more tests for other methods or behavior
});
