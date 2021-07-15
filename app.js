const timerDayEL = document.querySelector(".timer__day");
const timerHourEL = document.querySelector(".timer__hour");
const timerMinEL = document.querySelector(".timer__min");
const timerSecEL = document.querySelector(".timer__sec");



function getTimeDifference(start, end) {
  let milliseconds = Math.floor(end - start);
  let seconds = Math.floor(milliseconds/1000);
  let minutes = Math.floor(seconds/60);
  let hours = Math.floor(minutes/60);
  let days = Math.floor(hours/24);


  // this is done so that you can convert easier. 
  //so the days to the end date is the one leading
  hours = hours - (days*24);
  minutes = minutes - (days*24*60) - (hours*60);
  seconds = seconds - (days*24*60*60) - (hours*60*60) - (minutes*60);

// this first return statement is for testing purposes only 
  // return days + ' ' + hours + ' ' + minutes + ' ' + seconds

return {
  rDays: days,
  rHours: hours,
  rMinutes: minutes,
  rSecond: seconds
}


}


// getTimeDifference();

let timer = setInterval(function() {
  
  const startDate = new Date();
  const endDate = new Date("February 17, 2022 7:31:00");

  let timeDifferenceObj = getTimeDifference(startDate, endDate)
  // timerDayEL.innerHTML = timeDifferenceObj.rDays;
  // timerHourEL.innerHTML = timeDifferenceObj.rHours;
  // timerMinEL.innerHTML = timeDifferenceObj.rMinutes;
  // timerSecEL.innerHTML = timeDifferenceObj.rSecond;



  // this is to correct the days
  if (timerDayEL.innerHTML = timeDifferenceObj.rDays < 10) {
    timerDayEL.innerHTML = "0" + timeDifferenceObj.rDays;
  }
  else {
     timerDayEL.innerHTML = timeDifferenceObj.rDays;
   
  }


  // this is to correct hours
  if (timerHourEL.innerHTML = timeDifferenceObj.rHours < 10) {
    timerHourEL.innerHTML = "0" + timeDifferenceObj.rHours;
  }
  else {
    timerHourEL.innerHTML = timeDifferenceObj.rHours;
   
  }

  // this is to correct minutes
  if (timerMinEL.innerHTML = timeDifferenceObj.rMinutes < 10) {
    timerMinEL.innerHTML = "0" + timeDifferenceObj.rMinutes;
  }
  else {
    timerMinEL.innerHTML = timeDifferenceObj.rMinutes;
   
  }

// this is to correct seconds
  if (timerSecEL.innerHTML = timeDifferenceObj.rSecond < 10) {
    timerSecEL.innerHTML = "0" + timeDifferenceObj.rSecond;
  }
  else {
    timerSecEL.innerHTML = timeDifferenceObj.rSecond;
  
  }



  if (timerSecEL.innerHTML == 0 && timerMinEL.innerHTML == 0 
    && timerHourEL.innerHTML == 0 && timerHourEL.innerHTML == 0) {

    clearInterval(timer);
    alert("bro get work done");

  //  timerSecEL.innerHTML = "00"
  //  timerMinEL.innerHTML = "00"
  //  timerHourEL.innerHTML = "00"
  //  timerDayEL.innerHTML = "00"
  }

  }, 1000)


function timeArrived() {

  
 
}