// 1
const task1 = new Promise(resolve => {
    setTimeout(() => resolve("Task 1 complete"), 2000);
  });
  
  task1.then(console.log);
  
  // 2
  const task2 = new Promise((_, reject) => {
    reject("Task 2 failed");
  });
  
  task2.catch(console.error);
  
  // 3
  const task3 = Promise.resolve(5)
    .then(num => num * 2)
    .then(console.log);
  
  // 4
  function firstThenSecond() {
    return new Promise(resolve => {
      setTimeout(() => resolve("First"), 2000);
    }).then(msg => {
      console.log(msg);
      return new Promise(resolve => {
        setTimeout(() => resolve("Second"), 1000);
      });
    }).then(console.log);
  }
  
  firstThenSecond();
  
  // 5
  function task3Failure() {
    return new Promise((_, reject) => {
      setTimeout(() => reject("Task 3 failed"), 2000);
    });
  }
  
  task3Failure().catch(console.error);
  
  // 6
  function randomDelayTask1() {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    return new Promise(resolve => {
      setTimeout(() => resolve("Task 1 complete"), delay);
    });
  }
  
  randomDelayTask1().then(console.log);
  
  // 7
  function firstThenSecondRandom() {
    const delay1 = Math.floor(Math.random() * 3000) + 1000;
    const delay2 = Math.floor(Math.random() * 3000) + 1000;
    return new Promise(resolve => {
      setTimeout(() => resolve("First"), delay1);
    }).then(msg => {
      console.log(msg);
      return new Promise(resolve => {
        setTimeout(() => resolve("Second"), delay2);
      });
    }).then(console.log);
  }
  
  firstThenSecondRandom();
  
  // 8
  function task3FailureRandom() {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    return new Promise((_, reject) => {
      setTimeout(() => reject("Task 3 failed"), delay);
    });
  }
  
  task3FailureRandom().catch(console.error);
  
  // 9
  function task1Conditional() {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    const randomNum = Math.random();
    return new Promise(resolve => {
      setTimeout(() => {
        if (randomNum > 0.5) {
          resolve("Task 1 complete");
        } else {
          resolve("Task 1 was quick");
        }
      }, delay);
    });
  }
  
  task1Conditional().then(console.log);
  
  // 10
  function task3Conditional() {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    const randomNum = Math.random();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomNum < 0.3) {
          reject("Task 3 failed");
        } else {
          resolve("Task 3 complete");
        }
      }, delay);
    });
  }
  
  task3Conditional().then(console.log).catch(console.error);
  