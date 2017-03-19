const setInterval = (interval) => {
  return {
    type: 'SET_INTERVAL',
    interval
  };
};
const navigateThroughDates = (duration) => {
  return {
    type: 'NAVIGATE_DATES',
    duration
  };
}
export {setInterval, navigateThroughDates};
