var resultsData = {};

exports.setData = (data = {}) => {
  // cheap deep copy with no polyfill needed
  resultsData = JSON.parse(JSON.stringify(data));
};

exports.getDataAll = () => {
  return JSON.parse(JSON.stringify(resultsData)); // return a copy of the data
};

exports.getDataAuth = () => {
  // extract auth data from resultsData and return
  return 'auth';
};

exports.getDataDashboard = () => {
  // extract dashboard data from resultsData and return
  return 'dashboard';
};

exports.getDataPanel = () => {
  // extract panel data from resultsData and return
  return 'panel';
};

exports.getDataChart = () => {
  // extract chart data from resultsData and return
  return 'chart';
};