function compareArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  const arr3 = [1, 2, 4];
  
  console.log(compareArrays(arr1, arr2)); 
  console.log(compareArrays(arr1, arr3)); 
  