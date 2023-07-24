import { showStatus } from '../redux/categories/categoriesSlice';

describe('checkStatus', () => {
  it('should display status', () => {
    const message = 'Under Construction';

    const action = showStatus(message);

    expect(action).toEqual({
      type: 'categories/showStatus',
      payload: message,
    });
  });
});
