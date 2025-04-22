// time js start here


//stores html id's data in js-variables 
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var period = document.getElementById('period');


function clock() {

    // variable declaration to store the system time
    var systemHour = new Date().getHours();          // to store system hours
    var systemMinutes = new Date().getMinutes();     // to store system minutes
    var systemSecond = new Date().getSeconds();      // to store system seconds


    // AM pm logic
    var ampm = systemHour >= 12 ? "PM" : "AM";


    // for converting utc format(i.e 14:32:00) to 24 houre format (i.e 02:32:00)
    if (systemHour > 12) {
        systemHour = systemHour - 12;
    }


    // for adding 0 in starting
    systemHour = systemHour < 10 ? "0" + systemHour : systemHour;
    systemMinutes = systemMinutes < 10 ? "0" + systemMinutes : systemMinutes;
    systemSecond = systemSecond < 10 ? "0" + systemSecond : systemSecond;


    // stores system data in our written html file (i.e inner html)
    hours.innerHTML = systemHour;         // store system houre inner in our html
    minutes.innerHTML = systemMinutes;   //  store system minutes inner in our html
    seconds.innerHTML = systemSecond;   //  store system seconds inner in our html
    period.innerHTML = ampm;         // 


};

//calling function and as well as autometic refresh by 1s
setInterval(clock, 1000);



// calender js here
function showDate() {

    let dateobj = new Date();

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];

    let day = dateobj.getDay();
    let month = dateobj.getMonth();
    let year = dateobj.getFullYear();
    let date = dateobj.getDate();

    let coustumeFormate = days[day] + ' ' + date + ' ' + months[month] + ' ' + year;
    document.getElementById("calender").innerHTML = coustumeFormate;
};
showDate();