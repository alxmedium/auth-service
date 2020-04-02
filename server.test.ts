/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import add from './server';

describe('add', () => {
  describe('should return the sum of the 2 parameters', () => {
    test('should return 20 when the parameters are 10 + 10', () => {
      expect(add(10, 10)).toEqual(20);
    });
  });
});
