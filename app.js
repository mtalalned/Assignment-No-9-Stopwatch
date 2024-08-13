let seconds = document.querySelector ('#seconds');
let num_seconds= 0;
let minutes = document.querySelector ('#minutes');
let num_minutes= 0;
let hours = document.querySelector ('#hours');
let num_hours = 0;
let seconds_interval;
let minutes_interval;
let hours_interval;

function startStopwatch (){
    
    // INTERVAL FOR SECONDS
        seconds_interval = setInterval(function(){
            num_seconds += 1
            if (num_seconds <= 9){
                seconds.innerHTML = `0${num_seconds}`
            } else if (num_seconds > 9 && num_seconds < 60){
                seconds.innerHTML = num_seconds
            } else if(num_seconds === 60) {
                seconds.innerHTML = `0${num_seconds = 0}`
            }
        }, 1000)


    // CONDITIONAL INTERVAL FOR MINUTES
        
        // Condition when seconds value is 0 when start button is clicked
        if (num_seconds === 0) {
            minutes_interval = setInterval(function () {
                num_minutes += 1
                if (num_minutes <= 9){
                    minutes.innerHTML = `0${num_minutes}`
                } else if (num_minutes > 9 && num_minutes < 60){
                    minutes.innerHTML = num_minutes
                } else if(num_minutes === 60) {
                    minutes.innerHTML = `0${num_minutes = 0}`
                }
    
            }, 60000);
        } 
        
        // Condition when seconds value is not 0 when start button is clicked
        else if (num_seconds > 0 && num_seconds < 60){

            setTimeout (function() {
                if (num_minutes < 9) {
                    num_minutes +=1
                    minutes.innerHTML = `0${num_minutes}`
                } else if (num_minutes > 9 && num_minutes < 59) {
                    num_minutes +=1
                    minutes.innerHTML = `${num_minutes}`
                } else if (num_minutes === 59){
                    num_minutes = 0
                    minutes.innerHTML = `0${num_minutes}`
                }
                
                
                minutes_interval = setInterval(function () {
                    num_minutes += 1
                    if (num_minutes <= 9){
                        minutes.innerHTML = `0${num_minutes}`
                    } else if (num_minutes > 9 && num_minutes < 60){
                        minutes.innerHTML = num_minutes
                    } else if(num_minutes === 60) {
                        minutes.innerHTML = `0${num_minutes = 0}`
                    }
        
                }, 60000);
            }, (60000 - (num_seconds * 1000)))
        } 
        
        


        

    // CONDITIONAL INTERVAL FOR HOURS
        

    // condition at start of the stopwatch
    if (num_minutes === 0 && num_seconds === 0){
        hours_interval = setInterval(function () {
            num_hours += 1
            if (num_hours <= 9){
                hours.innerHTML = `0${num_hours}`
            } else if (num_hours > 9 && num_hours < 60){
                hours.innerHTML = num_hours
            }
        }, 3600000);
    }
    
    // condition when the stopwatch is continued after stopping
    else if (num_minutes > 0 && num_minutes < 60){
        setTimeout (function(){
            if (num_hours < 9){
                num_hours += 1
                hours.innerHTML = `0${num_hours}`
             } else if (num_hours > 9) {
                num_hours += 1
                hours.innerHTML = num_hours
             }
            
            hours_interval = setInterval(function () {
                num_hours += 1
                if (num_hours <= 9){
                    hours.innerHTML = `0${num_hours}`
                } else if (num_hours > 9 && num_hours < 60){
                    hours.innerHTML = num_hours
                }
            }, 3600000);
        }, (((59-num_minutes)*60*1000)+((60 - num_seconds) * 1000)))
    }
    }
    
    


function holdStopwatch () {
    clearInterval(hours_interval)
    clearInterval(minutes_interval)
    clearInterval(seconds_interval)
}


function resetStopwatch() {
    clearInterval(hours_interval)
    clearInterval(minutes_interval)
    clearInterval(seconds_interval)
    hours.innerHTML = `00`
    minutes.innerHTML = `00`
    seconds.innerHTML = `00`
}