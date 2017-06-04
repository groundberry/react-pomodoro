export function tick(prevState) {
  const { status, workTime, breakTime, timeLeft } = prevState;

  if (status === 'stoppedWork' || status === 'stoppedBreak') {
    return {};
  }

  if (status === 'work' && timeLeft === 0) {
    return {
      status: 'break',
      timeLeft: breakTime,
    };
  }

  if (status === 'break' && timeLeft === 0) {
    return {
      status: 'stoppedWork',
      timeLeft: workTime,
    };
  }

  return {
    timeLeft: timeLeft - 1,
  };
}

export function clickDecreaseWorkTime(prevState) {
  const { workTime } = prevState;

  if (workTime <= 60) {
    return {};
  }

  return {
    workTime: workTime - 60,
    timeLeft: workTime - 60,
  };
}


export function clickIncreaseWorkTime(prevState) {
  const { workTime } = prevState;

  return {
    workTime: workTime + 60,
    timeLeft: workTime + 60,
  };
}

export function clickDecreaseBreakTime(prevState) {
  const { breakTime } = prevState;

  if (breakTime <= 60) {
    return {};
  }

  return {
    breakTime: breakTime - 60,
  };
}


export function clickIncreaseBreakTime(prevState) {
  const { breakTime } = prevState;

  return {
    breakTime: breakTime + 60,
  };
}
