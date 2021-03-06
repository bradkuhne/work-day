var NineAmEl = document.querySelector('#NineAm');
var TenAmEl = document.querySelector('#TenAm');
var ElevenAmEl = document.querySelector('#ElevenAm');
var TwelvePmEl = document.querySelector('#TwelvePm');
var OnePmEl = document.querySelector('#OnePm');
var TwoPmEl = document.querySelector('#TwoPm');
var ThreePmEl = document.querySelector('#ThreePm');
var FourPmEl = document.querySelector('#FourPm');
var FivePmEl = document.querySelector('#FivePm');


// var NineAmTaskEl = document.querySelector('#NineAmTask'); 
var TenAmTaskEl = document.querySelector('#TenAmTask');
var ElevenAmTaskEl = document.querySelector('#ElevenAmTask');
var TwelvePmTaskEl = document.querySelector('#TwelvePmTask');
var OnePmTaskEl = document.querySelector('#OnePmTask');
var TwoPmTaskEl = document.querySelector('#TwoPmTask');
var ThreePmTaskEl = document.querySelector('#ThreePmTask');
var FourPmTaskEl = document.querySelector('#FourPmTask');
var FivePmTaskEl = document.querySelector('#FivePmTask');

//Load local storage and present saved tasks
var NineAmTaskEl = document.querySelector('#NineAmTask');
var lsNineAm = localStorage.getItem("NineAm");
if (lsNineAm) {
    console.log ("Value of local storage get item NineAm is: " + lsNineAm );
    NineAmTaskEl.placeholder = lsNineAm;
    console.log ("Value of NineAmTaskEl.placeholder " + NineAmTaskEl.placeholder);
};
var TenAmTaskEl = document.querySelector('#TenAmTask');
var lsTenAm = localStorage.getItem("TenAm");
if (lsTenAm) {
    console.log ("Value of local storage get item TenAm is: " + lsTenAm );
    TenAmTaskEl.placeholder = lsTenAm;
    console.log ("Value of TenAmTaskEl.placeholder " + TenAmTaskEl.placeholder);
};
var ElevenAmTaskEl = document.querySelector('#ElevenAmTask');
var lsElevenAm = localStorage.getItem("ElevenAm");
if (lsElevenAm) {
    console.log ("Value of local storage get item ElevenAm is: " + lsElevenAm );
    ElevenAmTaskEl.placeholder = lsElevenAm;
    console.log ("Value of ElevenAmTaskEl.placeholder " + ElevenAmTaskEl.placeholder);
};
var TwelvePmTaskEl = document.querySelector('#TwelvePmTask');
var lsTwelvePm = localStorage.getItem("TwelvePm");
if (lsTwelvePm) {
    console.log ("Value of local storage get item TwelvePm is: " + lsTwelvePm );
    TwelvePmTaskEl.placeholder = lsTwelvePm;
    console.log ("Value of TwelvePmTaskEl.placeholder " + TwelvePmTaskEl.placeholder);
};
var OnePmTaskEl = document.querySelector('#OnePmTask');
var lsOnePm = localStorage.getItem("OnePm");
if (lsOnePm) {
    console.log ("Value of local storage get item OnePm is: " + lsOnePm );
    OnePmTaskEl.placeholder = lsOnePm;
    console.log ("Value of OnePmTaskEl.placeholder " + OnePmTaskEl.placeholder);
};
var TwoPmTaskEl = document.querySelector('#TwoPmTask');
var lsTwoPm = localStorage.getItem("TwoPm");
if (lsTwoPm) {
    console.log ("Value of local storage get item OnePm is: " + lsTwoPm );
    TwoPmTaskEl.placeholder = lsTwoPm;
    console.log ("Value of TwoPmTaskEl.placeholder " + TwoPmTaskEl.placeholder);
};
var ThreePmTaskEl = document.querySelector('#ThreePmTask');
var lsThreePm = localStorage.getItem("ThreePm");
if (lsThreePm) {
    console.log ("Value of local storage get item ThreePm is: " + lsThreePm );
    ThreePmTaskEl.placeholder = lsThreePm;
    console.log ("Value of ThreePmTaskEl.placeholder " + ThreePmTaskEl.placeholder);
};
var FourPmTaskEl = document.querySelector('#FourPmTask');
var lsFourPm = localStorage.getItem("FourPm");
if (lsFourPm) {
    console.log ("Value of local storage get item FourPm is: " + lsFourPm );
    FourPmTaskEl.placeholder = lsFourPm;
    console.log ("Value of FourPmTaskEl.placeholder " + FourPmTaskEl.placeholder);
};
var FivePmTaskEl = document.querySelector('#FivePmTask');
var lsFivePm = localStorage.getItem("FivePm");
if (lsFivePm) {
    console.log ("Value of local storage get item FivePm is: " + lsFivePm );
    FivePmTaskEl.placeholder = lsFivePm;
    console.log ("Value of FivePmTaskEl.placeholder " + FivePmTaskEl.placeholder);
};

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
    console.log (" Inside function:  Value of NineAmTaskEl.textContent " + NineAmTaskEl.textContent);
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