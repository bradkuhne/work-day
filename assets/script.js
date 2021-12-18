
var NineAmEl = document.querySelector('#NineAm');



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
var saveHandler = function (event) {
    event.preventDefault();
    console.log ("Inside saveHandler function");
};



console.log ("This is NineAmEL.id: " + NineAmEl)
NineAmEl.addEventListener('click', saveHandler);



