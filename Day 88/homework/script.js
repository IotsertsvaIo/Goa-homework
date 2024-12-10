function frequencyTable(array) {
    const frequencyMap = new Map();
    array.forEach(num => {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });
    return frequencyMap;
  }
  
  const numbers = [1, 1, 2, 3, 3, 3];
  const result = frequencyTable(numbers);
  
  result.forEach((count, num) => console.log(`${num} --> ${count}`));
  