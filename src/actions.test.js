import {
  tick,
  resetTimer,
  clickDecreaseWorkTime,
  clickIncreaseWorkTime,
  clickDecreaseBreakTime,
  clickIncreaseBreakTime,
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

    it('changes the status from "work" to "break" when the work time ends', () => {
      const prevState = {
        status: 'work',
        breakTime: 300,
        timeLeft: 0,
      };

      const newState = {
        status: 'break',
        timeLeft: 300,
      };

      expect(tick(prevState)).toEqual(newState);
    });

    it('changes the status from "break" to "stoppedWork" when the break time ends', () => {
      const prevState = {
        status: 'break',
        workTime: 1500,
        timeLeft: 0,
      };

      const newState = {
        status: 'stoppedWork',
        timeLeft: 1500,
      };

      expect(tick(prevState)).toEqual(newState);
    });
  });

  describe('resetTimer', () => {
    it('resets the timer', () => {
      const prevState = {
        workTime: 1500,
        timeLeft: 250,
      };

      const newState = {
        timeLeft: 1500,
      };

      expect(resetTimer(prevState)).toEqual(newState);
    });
  });

  describe('clickDecreaseWorkTime', () => {
    it('decreases the work time by 60 seconds', () => {
      const prevState = {
        workTime: 120,
      };

      const newState = {
        workTime: 60,
      };

      expect(clickDecreaseWorkTime(prevState)).toEqual(newState);
    });
  });

  describe('clickIncreaseWorkTime', () => {
    it('increases the work time by 60 seconds', () => {
      const prevState = {
        workTime: 60,
      };

      const newState = {
        workTime: 120,
      };

      expect(clickIncreaseWorkTime(prevState)).toEqual(newState);
    });
  });

  describe('clickDecreaseBreakTime', () => {
    it('decreases the break time by 60 seconds', () => {
      const prevState = {
        breakTime: 120,
      };

      const newState = {
        breakTime: 60,
      };

      expect(clickDecreaseBreakTime(prevState)).toEqual(newState);
    });
  });

  describe('clickIncreaseBreakTime', () => {
    it('increases the break time by 60 seconds', () => {
      const prevState = {
        breakTime: 60,
      };

      const newState = {
        breakTime: 120,
      };

      expect(clickIncreaseBreakTime(prevState)).toEqual(newState);
    });
  });
});
