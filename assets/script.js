
var NineAmEl = document.querySelector('#NineAm');
var TenAmEl = document.querySelector('#TenAm');
var ElevenAmEl = document.querySelector('#ElevenAm');
var TwelvePmEl = document.querySelector('#TwelvePm');
var OnePmEl = document.querySelector('#OnePm');
var TwoPmEl = document.querySelector('#TwoPm');
var ThreePmEl = document.querySelector('#ThreePm');
var FourPmEl = document.querySelector('#FourPm');
var FivePmEl = document.querySelector('#FivePm');

// Variable for date at top
var todayDateEl = document.querySelector('#currentDay');
// console.log (todayDateEl);
var todayDate = moment().format('dddd, MMMM DD, h:mm a') ;
    todayDateEl.textContent = todayDate;
// console.log (todayDateEl.textContent);


// Compare current hour to each row hour
var currentHourAP = moment().format ('ha');
var currentHour = moment().format ('H');
// console.log ("The new currentHour without A/P: "+ currentHour);
if (currentHour < 9) {
    // console.log ("Inside IF STATEMENT: " + currentHour);
    document.getElementById("NineAmTask").className = ("future col-8");
    document.getElementById("TenAmTask").className = ("future col-8");
    document.getElementById("ElevenAmTask").className = ("future col-8");
    document.getElementById("TwelvePmTask").className = ("future col-8");
    document.getElementById("OnePmTask").className = ("future col-8");
    document.getElementById("TwoPmTask").className = ("future col-8");
    document.getElementById("ThreePmTask").className = ("future col-8");
    document.getElementById("FourPmTask").className = ("future col-8");
    document.getElementById("FivePmTask").className = ("future col-8");
} else {
    switch (currentHourAP){
        case "9am":
            console.log ("Inside switch statement 9am");
            document.getElementById("NineAmTask").className = ("present col-8");
            document.getElementById("TenAmTask").className = ("future col-8");
            document.getElementById("ElevenAmTask").className = ("future col-8");
            document.getElementById("TwelvePmTask").className = ("future col-8");
            document.getElementById("OnePmTask").className = ("future col-8");
            document.getElementById("TwoPmTask").className = ("future col-8");
            document.getElementById("ThreePmTask").className = ("future col-8");
            document.getElementById("FourPmTask").className = ("future col-8");
            document.getElementById("FivePmTask").className = ("future col-8");
            break;
        case "10am":
            console.log ("Inside switch statement 10am");
            document.getElementById("NineAmTask").className = ("past col-8");
            document.getElementById("TenAmTask").className = ("present col-8");
            document.getElementById("ElevenAmTask").className = ("future col-8");
            document.getElementById("TwelvePmTask").className = ("future col-8");
            document.getElementById("OnePmTask").className = ("future col-8");
            document.getElementById("TwoPmTask").className = ("future col-8");
            document.getElementById("ThreePmTask").className = ("future col-8");
            document.getElementById("FourPmTask").className = ("future col-8");
            document.getElementById("FivePmTask").className = ("future col-8");
            break;
        case "11am":
            console.log ("Inside switch statement 11am");
            document.getElementById("NineAmTask").className = ("past col-8");
            document.getElementById("TenAmTask").className = ("past col-8");
            document.getElementById("ElevenAmTask").className = ("present col-8");
            document.getElementById("TwelvePmTask").className = ("future col-8");
            document.getElementById("OnePmTask").className = ("future col-8");
            document.getElementById("TwoPmTask").className = ("future col-8");
            document.getElementById("ThreePmTask").className = ("future col-8");
            document.getElementById("FourPmTask").className = ("future col-8");
            document.getElementById("FivePmTask").className = ("future col-8");
            break;
        case "12pm":
            console.log ("Inside switch statement 12pm");
            document.getElementById("NineAmTask").className = ("past col-8");
            document.getElementById("TenAmTask").className = ("past col-8");
            document.getElementById("ElevenAmTask").className = ("past col-8");
            document.getElementById("TwelvePmTask").className = ("present col-8");
            document.getElementById("OnePmTask").className = ("future col-8");
            document.getElementById("TwoPmTask").className = ("future col-8");
            document.getElementById("ThreePmTask").className = ("future col-8");
            document.getElementById("FourPmTask").className = ("future col-8");
            document.getElementById("FivePmTask").className = ("future col-8");
            break;
        case "1pm":
            console.log ("Inside switch statement 1pm");
            document.getElementById("NineAmTask").className = ("past col-8");
            document.getElementById("TenAmTask").className = ("past col-8");
            document.getElementById("ElevenAmTask").className = ("past col-8");
            document.getElementById("TwelvePmTask").className = ("past col-8");
            document.getElementById("OnePmTask").className = ("present col-8");
            document.getElementById("TwoPmTask").className = ("future col-8");
            document.getElementById("ThreePmTask").className = ("future col-8");
            document.getElementById("FourPmTask").className = ("future col-8");
            document.getElementById("FivePmTask").className = ("future col-8");
            break;
        case "2pm":
            console.log ("Inside switch statement 2pm");
            document.getElementById("NineAmTask").className = ("past col-8");
            document.getElementById("TenAmTask").className = ("past col-8");
            document.getElementById("ElevenAmTask").className = ("past col-8");
            document.getElementById("TwelvePmTask").className = ("past col-8");
            document.getElementById("OnePmTask").className = ("past col-8");
            document.getElementById("TwoPmTask").className = ("present col-8");
            document.getElementById("ThreePmTask").className = ("future col-8");
            document.getElementById("FourPmTask").className = ("future col-8");
            document.getElementById("FivePmTask").className = ("future col-8");
            break;
        case "3pm":
            console.log ("Inside switch statement 3pm");
            document.getElementById("NineAmTask").className = ("past col-8");
            document.getElementById("TenAmTask").className = ("past col-8");
            document.getElementById("ElevenAmTask").className = ("past col-8");
            document.getElementById("TwelvePmTask").className = ("past col-8");
            document.getElementById("OnePmTask").className = ("past col-8");
            document.getElementById("TwoPmTask").className = ("past col-8");
            document.getElementById("ThreePmTask").className = ("present col-8");
            document.getElementById("FourPmTask").className = ("future col-8");
            document.getElementById("FivePmTask").className = ("future col-8");
            break;
        case "4pm":
            console.log ("Inside switch statement 4pm");
            document.getElementById("NineAmTask").className = ("past col-8");
            document.getElementById("TenAmTask").className = ("past col-8");
            document.getElementById("ElevenAmTask").className = ("past col-8");
            document.getElementById("TwelvePmTask").className = ("past col-8");
            document.getElementById("OnePmTask").className = ("past col-8");
            document.getElementById("TwoPmTask").className = ("past col-8");
            document.getElementById("ThreePmTask").className = ("past col-8");
            document.getElementById("FourPmTask").className = ("present col-8");
            document.getElementById("FivePmTask").className = ("future col-8");
            break;
        case "5pm":
            console.log ("Inside switch statement 5pm");
            document.getElementById("NineAmTask").className = ("past col-8");
            document.getElementById("TenAmTask").className = ("past col-8");
            document.getElementById("ElevenAmTask").className = ("past col-8");
            document.getElementById("TwelvePmTask").className = ("past col-8");
            document.getElementById("OnePmTask").className = ("past col-8");
            document.getElementById("TwoPmTask").className = ("past col-8");
            document.getElementById("ThreePmTask").className = ("past col-8");
            document.getElementById("FourPmTask").className = ("past col-8");
            document.getElementById("FivePmTask").className = ("present col-8");
            break;
        default:
            console.log ("Inside switch statement more than 5pm");
            document.getElementById("NineAmTask").className = ("past col-8");
            document.getElementById("TenAmTask").className = ("past col-8");
            document.getElementById("ElevenAmTask").className = ("past col-8");
            document.getElementById("TwelvePmTask").className = ("past col-8");
            document.getElementById("OnePmTask").className = ("past col-8");
            document.getElementById("TwoPmTask").className = ("past col-8");
            document.getElementById("ThreePmTask").className = ("past col-8");
            document.getElementById("FourPmTask").className = ("past col-8");
            document.getElementById("FivePmTask").className = ("past col-8");
            break;  
    };
};
var nineAmSaveHandler = function (event) {
    event.preventDefault();
    var savedNineAmTask = document.getElementById("NineAmTask").value;
    console.log ("This is the 9am task to be saved: " + savedNineAmTask);
    localStorage.setItem("NineAm", savedNineAmTask);
};
var tenAmSaveHandler = function (event) {
    event.preventDefault();
    var savedTenAmTask = document.getElementById("TenAmTask").value;
    console.log ("This is the 10am task to be saved: " + savedTenAmTask);
    localStorage.setItem("TenAm", savedTenAmTask);
};
var elevenAmSaveHandler = function (event) {
    event.preventDefault();
    var savedElevenAmTask = document.getElementById("ElevenAmTask").value;
    console.log ("This is the 11am task to be saved: " + savedElevenAmTask);
    localStorage.setItem("ElevenAm", savedElevenAmTask);
};
var twelvePmSaveHandler = function (event) {
    event.preventDefault();
    var savedTwelvePmTask = document.getElementById("TwelvePmTask").value;
    console.log ("This is the 12pm task to be saved: " + savedTwelvePmTask);
    localStorage.setItem("TwelvePm", savedTwelvePmTask);
};
var onePmSaveHandler = function (event) {
    event.preventDefault();
    var savedOnePmTask = document.getElementById("OnePmTask").value;
    console.log ("This is the 1pm task to be saved: " + savedOnePmTask);
    localStorage.setItem("OnePm", savedOnePmTask);
};
var twoPmSaveHandler = function (event) {
    event.preventDefault();
    var savedTwoPmTask = document.getElementById("TwoPmTask").value;
    console.log ("This is the 2pm task to be saved: " + savedTwoPmTask);
    localStorage.setItem("TwoPm", savedTwoPmTask);
};
var threePmSaveHandler = function (event) {
    event.preventDefault();
    var savedThreePmTask = document.getElementById("ThreePmTask").value;
    console.log ("This is the 3pm task to be saved: " + savedThreePmTask);
    localStorage.setItem("ThreePm", savedThreePmTask);
};
var fourPmSaveHandler = function (event) {
    event.preventDefault();
    var savedFourPmTask = document.getElementById("FourPmTask").value;
    console.log ("This is the 4pm task to be saved: " + savedFourPmTask);
    localStorage.setItem("FourPm", savedFourPmTask);
};
var fivePmSaveHandler = function (event) {
    event.preventDefault();
    var savedFivePmTask = document.getElementById("FivePmTask").value;
    console.log ("This is the 5pm task to be saved: " + savedFivePmTask);
    localStorage.setItem("FivePm", savedFivePmTask);
};


// console.log ("This is NineAmEL.id: " + NineAmEl)
NineAmEl.addEventListener('click', nineAmSaveHandler);
TenAmEl.addEventListener('click', tenAmSaveHandler);
ElevenAmEl.addEventListener('click', elevenAmSaveHandler);
TwelvePmEl.addEventListener('click', twelvePmSaveHandler);
OnePmEl.addEventListener('click', onePmSaveHandler);
TwoPmEl.addEventListener('click', twoPmSaveHandler);
ThreePmEl.addEventListener('click', threePmSaveHandler);
FourPmEl.addEventListener('click', fourPmSaveHandler);
FivePmEl.addEventListener('click', fivePmSaveHandler);