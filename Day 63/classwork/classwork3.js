function checkMinute() {
    const intervalId = setInterval(() => {
    const now = new Date();
    const currentMinute = now.getMinutes();
      
    console.log(`Current time: ${now.toLocaleTimeString()}`);
  
    if (currentMinute === 35) {
        console.log('Minute is 35, stopping the interval.');
        clearInterval(intervalId);
      }
    }, 1000); 
  }
  



checkMinute();