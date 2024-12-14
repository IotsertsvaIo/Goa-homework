function findLongest(array) {
    return array.reduce((longest, current) => {
      return current.toString().length > longest.toString().length ? current : longest;
    }, array[0]);
  }
  