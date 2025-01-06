// Code your solution here
// Function 1: findMatching
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function 2: fuzzyMatch
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Function 3: matchName
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example Data
  const driversArray = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  const driversObjectArray = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
  // Test Examples
  console.log(findMatching(driversArray, 'Bobby')); // ['Bobby', 'bobby']
  console.log(fuzzyMatch(driversArray, 'Sa')); // ['Sammy', 'Sarah', 'Sally']
  console.log(matchName(driversObjectArray, 'Bobby')); 
  // [
  //   { name: 'Bobby', hometown: 'Pittsburgh' },
  //   { name: 'Bobby', hometown: 'Tampa Bay' }
  // ]
  