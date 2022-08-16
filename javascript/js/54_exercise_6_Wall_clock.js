 function updateClock(){
    // get the current date
    let currentTime = new Date()
    
    //Extract hour, minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // pad 0 if minutes or second is less than 10 (single digit)
    currentMinutes = (currentMinutes<10 ? "0": "")+ currentMinutes
    currentSeconds = (currentSeconds<10 ? "0": "")+ currentSeconds

    // convert railway clock to am/pm clock
    currentHour = (currentHour > 12)?currentHour-12 : currentHour;
    currentHour = (currentHour==0)? 12 : currentHour;

    // choose am/pm as per the time of the day
    let timeOFDay = (currentHour<12)?"AM":"PM";
    //prepare the time string from hours ,minutes and seconds
    let currentTimesStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOFDay;
 
    // insert the time string inside the dom
    document.getElementById("clock").innerHTML = currentTimesStr;
 }