export function clickTimer(prevState) {
  let { status } = prevState;

  if (prevState.status === 'off') {
    status = 'on';
  } else {
    status = 'off';
  }

  return {
    status,
  };
}
