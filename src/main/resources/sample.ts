import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PopoverAlertService } from './popover-alert.service';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PopoverAlertComponent } from './popover-alert.component';
import { PopoverAlertRef, PopoverAlertConfig } from './popover-alert.models';

describe('PopoverAlertService', () => {
  let service: PopoverAlertService;
  let componentLoaderFactorySpy: jasmine.SpyObj<ComponentLoaderFactory>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ComponentLoaderFactory', ['createLoader']);
    TestBed.configureTestingModule({
      providers: [
        PopoverAlertService,
        { provide: ComponentLoaderFactory, useValue: spy }
      ]
    });
    service = TestBed.inject(PopoverAlertService);
    componentLoaderFactorySpy = TestBed.inject(ComponentLoaderFactory) as jasmine.SpyObj<ComponentLoaderFactory>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show a secondary alert', () => {
    const addAlertSpy = spyOn(service, 'addAlert');
    const heading = 'Heading';
    const messages = ['Message 1', 'Message 2'];

    service.showSecondaryAlert(heading, messages);

    expect(addAlertSpy).toHaveBeenCalledWith(heading, 'secondary', messages);
  });

  it('should show a success alert', () => {
    const addAlertSpy = spyOn(service, 'addAlert');
    const heading = 'Heading';
    const message = 'Success message';

    service.showSuccessAlert(heading, message);

    expect(addAlertSpy).toHaveBeenCalledWith(heading, 'success', message);
  });

  it('should show an info alert', () => {
    const addAlertSpy = spyOn(service, 'addAlert');
    const heading = 'Heading';
    const message = 'Info message';

    service.showInfoAlert(heading, message);

    expect(addAlertSpy).toHaveBeenCalledWith(heading, 'info', message);
  });

  it('should show a warning alert', () => {
    const addAlertSpy = spyOn(service, 'addAlert');
    const heading = 'Heading';
    const message = 'Warning message';

    service.showWarningAlert(heading, message);

    expect(addAlertSpy).toHaveBeenCalledWith(heading, 'warning', message);
  });

  it('should show an error alert', () => {
    const addAlertSpy = spyOn(service, 'addAlert');
    const heading = 'Heading';
    const message = 'Error message';

    service.showErrorAlert(heading, message);

    expect(addAlertSpy).toHaveBeenCalledWith(heading, 'danger', message);
  });


  it('should clear all alerts', () => {
    const componentLoader = jasmine.createSpyObj('ComponentLoader', ['hide']);
    componentLoaderFactorySpy.createLoader.and.returnValue(componentLoader);

    service.clearAllAlerts();

    expect(componentLoader.hide).toHaveBeenCalled();
  });

  it('should show an alert', () => {
    const alertConfig: PopoverAlertConfig = {
      type: 'success',
      heading: 'Test Heading',
      message: ['Test Message 1', 'Test Message 2']
    };
    const popoverAlertRef = jasmine.createSpyObj<PopoverAlertRef>('PopoverAlertRef', ['hide']);
    componentLoaderFactorySpy.createLoader.and.returnValue({
      show: jasmine.createSpy(),
      hide: jasmine.createSpy()
    });

    service.showAlert(alertConfig);

    expect(componentLoaderFactorySpy.createLoader).toHaveBeenCalledWith(
      null,
      null,
      null
    );
  });



});
