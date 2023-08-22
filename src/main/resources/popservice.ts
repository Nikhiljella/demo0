import { TestBed } from '@angular/core/testing';
import { PopoverAlertService } from './popover-alert.service';
import { PopoverAlertConfig } from './popover-alert-config.model';
import { PopoverAlertRef } from './popover-alert-ref.model';

describe('PopoverAlertService', () => {
  let popoverAlertService: PopoverAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopoverAlertService],
    });

    popoverAlertService = TestBed.inject(PopoverAlertService);
  });

  it('should add an alert with string message', () => {
    const heading = 'Sample Heading';
    const alertType = 'info';
    const message = 'Sample Message';

    const addAlertSpy = spyOn(popoverAlertService, 'addAlert').and.callThrough();
    popoverAlertService.addAlert(heading, alertType, message);

    expect(addAlertSpy).toHaveBeenCalledWith(heading, alertType, [message]);
  });

  it('should add an alert with array of messages', () => {
    const heading = 'Sample Heading';
    const alertType = 'success';
    const messages = ['Message 1', 'Message 2'];

    const addAlertSpy = spyOn(popoverAlertService, 'addAlert').and.callThrough();
    popoverAlertService.addAlert(heading, alertType, messages);

    expect(addAlertSpy).toHaveBeenCalledWith(heading, alertType, messages);
  });

  it('should call showAlert method with correct config', () => {
    const heading = 'Sample Heading';
    const alertType = 'danger';
    const messages = 'Sample Message';

    const popAltCfg: PopoverAlertConfig = new PopoverAlertConfig();
    popAltCfg.type = alertType;
    popAltCfg.heading = heading;
    popAltCfg.message = [messages];

    const showAlertSpy = spyOn(popoverAlertService, 'showAlert').and.callThrough();
    popoverAlertService.addAlert(heading, alertType, messages);

    expect(showAlertSpy).toHaveBeenCalledWith(popAltCfg);
  });

  // Add more test cases as needed for different scenarios

  // Test for clearAll() method
  it('should clear all alerts when clearAll is called', () => {
    const hideSpy = spyOn(popoverAlertService.alertComponentLoader, 'hide');
    popoverAlertService.clearAll();

    expect(hideSpy).toHaveBeenCalled();
  });

  import { TestBed } from '@angular/core/testing';
  import { PopoverAlertService } from './popover-alert.service';
  import { PopoverAlertConfig } from './popover-alert-config.model';
  import { PopoverAlertRef } from './popover-alert-ref.model';

  describe('PopoverAlertService', () => {
    let popoverAlertService: PopoverAlertService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [PopoverAlertService],
      });

      popoverAlertService = TestBed.inject(PopoverAlertService);
    });

    it('should add an alert with string message', () => {
      const heading = 'Sample Heading';
      const alertType = 'info';
      const message = 'Sample Message';

      const addAlertSpy = spyOn(popoverAlertService, 'addAlert').and.callThrough();
      popoverAlertService.addAlert(heading, alertType, message);

      expect(addAlertSpy).toHaveBeenCalledWith(heading, alertType, [message]);
    });

    it('should add an alert with array of messages', () => {
      const heading = 'Sample Heading';
      const alertType = 'success';
      const messages = ['Message 1', 'Message 2'];

      const addAlertSpy = spyOn(popoverAlertService, 'addAlert').and.callThrough();
      popoverAlertService.addAlert(heading, alertType, messages);

      expect(addAlertSpy).toHaveBeenCalledWith(heading, alertType, messages);
    });

    it('should call showAlert method with correct config', () => {
      const heading = 'Sample Heading';
      const alertType = 'danger';
      const messages = 'Sample Message';

      const popAltCfg: PopoverAlertConfig = new PopoverAlertConfig();
      popAltCfg.type = alertType;
      popAltCfg.heading = heading;
      popAltCfg.message = [messages];

      const showAlertSpy = spyOn(popoverAlertService, 'showAlert').and.callThrough();
      popoverAlertService.addAlert(heading, alertType, messages);

      expect(showAlertSpy).toHaveBeenCalledWith(popAltCfg);
    });

    // Add more test cases as needed for different scenarios

    // Test for clearAll() method
    it('should clear all alerts when clearAll is called', () => {
      const hideSpy = spyOn(popoverAlertService.alertComponentLoader, 'hide');
      popoverAlertService.clearAll();

      expect(hideSpy).toHaveBeenCalled();
    });
  });

});
