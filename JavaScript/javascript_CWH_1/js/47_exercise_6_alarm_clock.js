const alarmSubmit = document.getElementById('alarmSubmit');
 
//Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('');

//function to play the alarm ring tone
function ringBell(){
    audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e){
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`setting alarm for ${alarmDate}....`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(()=>{
            ringBell();
        }, timeToAlarm);
    }

    e.preventDefault();
}