export const formatSeconds = (seconds) => {
  return seconds < 10 ? `${'0' + seconds}` : seconds;
}