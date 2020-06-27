export const convertSecToDisplayTime = (seconds?: number) => {
  if (!seconds) {
    return '0:00';
  }
  const minutes = Math.floor(seconds / 60);
  let restSecounds = Math.floor(seconds % 60);
  let secoundsString = restSecounds < 10 ? '0' + restSecounds.toString() : restSecounds.toString();

  return `${minutes}:${secoundsString}`;
};
