function updateClock(){
    let now = new Date();
    let dayName = now.getDay();
        mo = now.getMonth();
        dayNum = now.getDate();
        year = now.getFullYear();
        hour = now.getHours();
        min = now.getMinutes();
        second = now.getSeconds();
        prepand = "AM";

    if(hour === 0){
        hour = 12;
    }
    if(hour > 12){
        hour -= 12;
        prepand = "PM";
    }

    Number.prototype.pad = function(digits){
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        ids = ["dayName", "month", "numofday", "year", "hour", "min", "second", "prepand"];
        values = [week[dayName], months[mo], dayNum.pad(2), year, hour.pad(2), min.pad(2), second.pad(2), prepand];
    
    for(let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initClock(){
    updateClock();
    window.setInterval(updateClock,1);
}

function changeMode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}