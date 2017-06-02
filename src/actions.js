/* eslint-disable  import/prefer-default-export */

export function tick(prevState) {
  const { mode, timeLeft } = prevState;

  if (mode === 'stop' && timeLeft === 1500) {
    return {
      mode: 'work',
      timeLeft: 1500,
    };
  }

  if (mode === 'work' && timeLeft === 0) {
    return {
      mode: 'break',
      timeLeft: 300,
    };
  }

  if (mode === 'break' && timeLeft === 0) {
    return {
      mode: 'stop',
      status: 'off',
      timeLeft: 1500,
    };
  }

  return {
    timeLeft: timeLeft - 1,
  };
}

export function resetTimer() {
  return {
    timeLeft: 1500,
  };
}

export function clickDecrease(prevState) {
  const { timeLeft } = prevState;

  return {
    timeLeft: timeLeft - 60,
  };
}


export function clickIncrease(prevState) {
  const { timeLeft } = prevState;

  return {
    timeLeft: timeLeft + 60,
  };
}
