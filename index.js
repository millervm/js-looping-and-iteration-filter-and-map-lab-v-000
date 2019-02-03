// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  }).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, criterion) {
  return drivers.filter(function(driver) {
    return driver[Object.keys(criterion)[0]] == Object.values(criterion)[0];
    //return driver[criterion.key] == criterion.value;
  });
}
