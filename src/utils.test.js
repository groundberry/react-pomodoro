import * as utils from './utils';

describe('utils', () => {
  describe('leftPad', () => {
    it('adds a 0 to the left if the number is less than 10', () => {
      expect(utils.leftPad(9)).toBe('09');
    });

    it('does not a 0 to the left if the number is less than 10', () => {
      expect(utils.leftPad(10)).toBe('10');
    });
  });
});
