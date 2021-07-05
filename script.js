function startTime(){
var hours = document.getElementById('hrs');
var minutes = document.getElementById('min');
var seconds = document.getElementById('sec');
var period = document.getElementById('period');

var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();
var ampm = "AM";

if (h == 0){
    h == 12;
}

if (h < 12){
    ampm = "AM";
}

if (h > 12){
    h = h -12;
    ampm = "PM";
}

h = (h < 10) ? '0' + h : h;
m = (m < 10) ? '0' + m : m;
s = (s < 10) ? '0' + s : s;

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
period.innerHTML = ampm;

setTimeout(startTime, 1000);
}