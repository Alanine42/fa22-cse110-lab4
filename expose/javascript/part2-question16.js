let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2 
}

// User for...in to access the keys of an object
for (const property in statistics) {
  if (property[0] == 'r' || statistics[property] % 2 == 1) {
    console.log(statistics[property]);  // prints the value
  }
}



