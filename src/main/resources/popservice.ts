import { TestBed } from '@angular/core/testing';
import { PopoverAlertService } from './popover-alert.service';
import { ComponentLoaderFactory, ComponentLoader } from 'your-component-loader-library'; // Replace with actual import
import { PopoverAlertConfig } from './popover-alert-config.model'; // Replace with actual import
import { PopoverAlertRef } from './popover-alert-ref.model'; // Replace with actual import

describe('PopoverAlertService', () => {
  let service: PopoverAlertService;
  let componentLoader: jasmine.SpyObj<ComponentLoader<PopoverAlertComponent>>;

  beforeEach(() => {
    const componentLoaderFactory = jasmine.createSpyObj('ComponentLoaderFactory', ['createLoader']);
    componentLoader = jasmine.createSpyObj('ComponentLoader', ['show', 'hide']);

    componentLoaderFactory.createLoader.and.returnValue(componentLoader);

    TestBed.configureTestingModule({
      providers: [
        PopoverAlertService,
        { provide: ComponentLoaderFactory, useValue: componentLoaderFactory },
      ],
    });
    service = TestBed.inject(PopoverAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show secondary alert', () => {
    const heading = 'Test Heading';
    const messages = ['Test Message'];

    service.showSecondaryAlert(heading, messages);

    // Add your assertions here
  });

  it('should show success alert', () => {
    const heading = 'Test Heading';
    const messages = ['Test Message'];

    service.showSuccessAlert(heading, messages);

    // Add your assertions here
  });

  it('should show info alert', () => {
    const heading = 'Test Heading';
    const messages = ['Test Message'];

    service.showInfoAlert(heading, messages);

    // Add your assertions here
  });

  it('should show warning alert', () => {
    const heading = 'Test Heading';
    const messages = ['Test Message'];

    service.showWarningAlert(heading, messages);

    // Add your assertions here
  });

  it('should show error alert', () => {
    const heading = 'Test Heading';
    const messages = ['Test Message'];

    service.showErrorAlert(heading, messages);

    // Add your assertions here
  });

  it('should add alert', () => {
    const heading = 'Test Heading';
    const alertType = 'test';
    const messages = ['Test Message'];

    service.addAlert(heading, alertType, messages);

    // Add your assertions here
  });

  it('should clear all alerts', () => {
    // Mock that an alert is shown
    componentLoader.isShown = true;

    service.clearAll();

    expect(componentLoader.hide).toHaveBeenCalled();
  });

  it('should show alert', () => {
    // Mock that an alert is shown
    componentLoader.isShown = true;

    const alertConfig: PopoverAlertConfig = {
      type: 'test',
      heading: 'Test Heading',
      message: ['Test Message'],
    };

    service.showAlert(alertConfig);

    expect(componentLoader.hide).toHaveBeenCalled();
    // Add your assertions for show method
  });
});
