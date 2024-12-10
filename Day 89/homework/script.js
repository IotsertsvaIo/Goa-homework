// 1) 
function createStudentMap(studentList) {
    const studentMap = new Map();
    studentList.forEach(([name, score]) => {
      studentMap.set(name, score);
    });
    return studentMap;
  }
  
  const students = [
    ["Alice", 85],
    ["Bob", 90],
    ["Charlie", 78]
  ];
  const studentMap = createStudentMap(students);
  console.log(studentMap);
  
  // 2) 
  function removeDuplicates(array) {
    return [...new Set(array)];
  }
  
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers);
  
  // 3) 
  function increaseScores(originalMap) {
    const newMap = new Map();
    originalMap.forEach((score, name) => {
      newMap.set(name, score + 5);
    });
    return newMap;
  }
  
  const updatedStudentMap = increaseScores(studentMap);
  console.log(updatedStudentMap);
  