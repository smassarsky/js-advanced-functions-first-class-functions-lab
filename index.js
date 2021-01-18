function returnFirstTwoDrivers(arr) {
  return arr.slice(0, 2)
}

function returnLastTwoDrivers(arr) {
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function(fare) {
    return multiplier * fare
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, func) {
  return func(drivers)
}