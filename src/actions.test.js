import {
  tick,
} from './actions';

describe('actions', () => {
  describe('tick', () => {
    it('deducts the time left on the timer by one second', () => {
      const prevState = {
        timeLeft: 59,
      };

      const newState = {
        timeLeft: 58,
      };

      expect(tick(prevState)).toEqual(newState);
    });
  });
});
