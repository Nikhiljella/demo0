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

  // Add more test cases as needed
});
