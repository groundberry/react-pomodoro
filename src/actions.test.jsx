import {
  clickTimer,
} from './actions';

describe('actions', () => {
  describe('clickTimer', () => {
    it('changes the status of the timer', () => {
      const prevState = {
        status: 'off',
      };

      const newState = {
        status: 'on',
      };

      expect(clickTimer(prevState)).toEqual(newState);
    });
  });
});
