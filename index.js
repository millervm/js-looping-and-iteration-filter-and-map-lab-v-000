// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  newDrivers = drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
  return newDrivers.map(function(driver) {
    return driver.name;
  });
}
