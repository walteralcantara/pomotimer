export const formatMinutes = (minutes) => {
  return minutes < 10 ? `${'0' + minutes}` : minutes;
}