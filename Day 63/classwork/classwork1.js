function manualFilter(func, array) {
    let filteredArray = [];
    
    for (let i = 0; i < array.length; i++) {
      if (func(array[i])) {
        filteredArray.push(array[i]);
      }
    }
    
    return filteredArray;
  }