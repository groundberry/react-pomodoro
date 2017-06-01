/* eslint-disable  import/prefer-default-export */

export function tick(prevState) {
  const { timeLeft } = prevState;

  return {
    timeLeft: timeLeft - 1,
  };
}
