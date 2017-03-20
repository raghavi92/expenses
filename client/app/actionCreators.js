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
const setData = (data) => {
  return {
    type: 'SET_DATA',
    data
  };
};
export {setInterval, navigateThroughDates, setData};
