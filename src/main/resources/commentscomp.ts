import { YourService } from './your-service'; // Import your service
import { TestBed } from '@angular/core/testing';

describe('YourService', () => {
  let service: YourService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YourService]
    });

    service = TestBed.inject(YourService);
  });

  it('should calculate active comment count', () => {
    // Create a sample comments array
    const sampleComments = [
      { status: 'ACTIVE' },
      { status: 'DELETED' },
      { status: 'ACTIVE' }
    ];

    spyOn(service, 'getActiveComments').and.returnValue(sampleComments);

    const count = service.getActiveCommentCount();

    expect(count).toBe(2); // Expecting 2 active comments in the sampleComments array
  });

  it('should get rejection reasons', () => {
    const sampleCodes = ['A', 'B', 'C'];

    // Mock the rejectionReasons array
    spyOn(service.rejectionReasons, 'filter').and.returnValue([
      { code: 'A', description: 'Reason A' },
      { code: 'B', description: 'Reason B' },
      { code: 'C', description: 'Reason C' }
    ]);

    const reasons = service.getRejectionReasons(sampleCodes);

    expect(reasons).toEqual(['Reason A', 'Reason B', 'Reason C']);
  });

  it('should disable submit comment button', () => {
    service.newCommentText = '';
    const result = service.disableSubmitCommentButton();

    expect(result).toBe(true);
  });

  it('should disable submit edit button', () => {
    service.editComment = { comment: 'Sample comment' };
    service.previousCommentText = 'Sample comment';

    const result = service.disableSubmitEditButton();

    expect(result).toBe(true);
  });

  it('should set isAddingNewComment to true and focus textarea', () => {
      const textareaElement = document.createElement('textarea');
      spyOn(document, 'querySelector').and.returnValue(textareaElement);

      const focusEvent = new FocusEvent('focus');
      component.getAddingComment(true, focusEvent);

      expect(component.isAddingNewComment).toBe(true);
      expect(textareaElement.focus).toHaveBeenCalled();
    });

    it('should set isAddingNewComment to false and call addNewComment', () => {
      spyOn(component, 'addNewComment');

      const blurEvent = new FocusEvent('blur');
      component.getAddingComment(false, blurEvent);

      expect(component.isAddingNewComment).toBe(false);
      expect(component.addNewComment).toHaveBeenCalled();
    });


  // Add more test cases as needed
});
