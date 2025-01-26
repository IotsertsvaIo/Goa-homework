function checkTask() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("შევამოწმოთ დავალება");
      }, 1000); 
    });
  }
  
 
function completeTask() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("დავალება შესრულდა");
      }, 1500); 
    });
  }
  
  
function evaluateTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
          resolve(`დავალება შესრულდა წარმატებულად და მივიღე ${Math.floor(randomValue * 10)} ქულა`);
        } else {
          reject("ჩავიჭერით");
        }
      }, 2000); 
    });
  }
  
 
checkTask()
    .then((message) => {
      console.log(message);
      return completeTask();
    })
    .then((message) => {
      console.log(message);
      return evaluateTask();
    })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error); 
    });
  