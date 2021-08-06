const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const ayearsEl = document.getElementById("a-years");
const amonthsEl = document.getElementById("a-months");
const adaysEl = document.getElementById("a-days");
const ahoursEl = document.getElementById("a-hours");
const aminsEl = document.getElementById("a-mins");
const asecondsEl = document.getElementById("a-seconds");

const fyearsEl = document.getElementById("f-years");
const fmonthsEl = document.getElementById("f-months");
const fdaysEl = document.getElementById("f-days");
const fhoursEl = document.getElementById("f-hours");
const fminsEl = document.getElementById("f-mins");
const fsecondsEl = document.getElementById("f-seconds");

const syearsEl = document.getElementById("s-years");
const smonthsEl = document.getElementById("s-months");
const sdaysEl = document.getElementById("s-days");
const shoursEl = document.getElementById("s-hours");
const sminsEl = document.getElementById("s-mins");
const ssecondsEl = document.getElementById("s-seconds");

// SULOTION 2
const dobFahad = new Date('29 jun 1983');
const dobAnoud = new Date('26 aug 1989');
const dobFaisal = new Date('26 jan 2015');
const dobSoso = new Date('26 jun 2013');


function ageCalculation(dob) {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const today = new Date();
    
    const year = dob.getFullYear();
    const month = dob.getMonth() + 1;
    const day = dob.getDate();
    const hour = dob.getHours();
    const mins = dob.getMinutes();
    const sec = dob.getSeconds();
    
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
    const currenthour = today.getHours();
    const currentmins =today.getMinutes();
    const currentsec = today.getSeconds();
    
    birthYear = currentYear - year;
    
    if (currentMonth >= month) {
      birthMonth = currentMonth - month;
    } else {
      birthYear--;
      birthMonth = 12 + currentMonth - month;
    }
    
    if (currentDay >= day) {
      birthDay = currentDay - day;
    } else {
      birthMonth--;
      let days = months[currentMonth - 2];
      birthDay = days + currentDay - day;
    
      if (birthMonth < 0) {
        birthMonth = 11;
        birthYear--;
      }
    }
    
    yearsEl.innerHTML = birthYear;
    monthsEl.innerHTML = birthMonth;
    daysEl.innerHTML = birthDay;
    hoursEl.innerHTML = formatTime(currenthour);
    minsEl.innerHTML = formatTime(currentmins);
    secondsEl.innerHTML = formatTime(currentsec);
    
    // fyearsEl.innerHTML = birthYear;
    // fmonthsEl.innerHTML = birthMonth;
    // fdaysEl.innerHTML = birthDay;
    // fhoursEl.innerHTML = formatTime(currenthour);
    // fminsEl.innerHTML = formatTime(currentmins);
    // fsecondsEl.innerHTML = formatTime(currentsec);
    
    // syearsEl.innerHTML = birthYear;
    // smonthsEl.innerHTML = birthMonth;
    // sdaysEl.innerHTML = birthDay;
    // shoursEl.innerHTML = formatTime(currenthour);
    // sminsEl.innerHTML = formatTime(currentmins);
    // ssecondsEl.innerHTML = formatTime(currentsec);
}
function ageCalculationAnoud(dob) {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const today = new Date();
    const year = dob.getFullYear();
    const month = dob.getMonth() + 1;
    const day = dob.getDate();
    const hour = dob.getHours();
    const mins = dob.getMinutes();
    const sec = dob.getSeconds();
    
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
    const currenthour = today.getHours();
    const currentmins =today.getMinutes();
    const currentsec = today.getSeconds();
    
    birthYear = currentYear - year;
    
    if (currentMonth >= month) {
      birthMonth = currentMonth - month;
    } else {
      birthYear--;
      birthMonth = 12 + currentMonth - month;
    }
    
    if (currentDay >= day) {
      birthDay = currentDay - day;
    } else {
      birthMonth--;
      let days = months[currentMonth - 2];
      birthDay = days + currentDay - day;
    
      if (birthMonth < 0) {
        birthMonth = 11;
        birthYear--;
      }
    }
    
    ayearsEl.innerHTML = birthYear;
    amonthsEl.innerHTML = birthMonth;
    adaysEl.innerHTML = birthDay;
    ahoursEl.innerHTML = formatTime(currenthour);
    aminsEl.innerHTML = formatTime(currentmins);
    asecondsEl.innerHTML = formatTime(currentsec);
    
}
function ageCalculationFaisal(dob) {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const today = new Date();
    const year = dob.getFullYear();
    const month = dob.getMonth() + 1;
    const day = dob.getDate();
    const hour = dob.getHours();
    const mins = dob.getMinutes();
    const sec = dob.getSeconds();
    
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
    const currenthour = today.getHours();
    const currentmins =today.getMinutes();
    const currentsec = today.getSeconds();
    
    birthYear = currentYear - year;
    
    if (currentMonth >= month) {
      birthMonth = currentMonth - month;
    } else {
      birthYear--;
      birthMonth = 12 + currentMonth - month;
    }
    
    if (currentDay >= day) {
      birthDay = currentDay - day;
    } else {
      birthMonth--;
      let days = months[currentMonth - 2];
      birthDay = days + currentDay - day;
    
      if (birthMonth < 0) {
        birthMonth = 11;
        birthYear--;
      }
    }
    
    fyearsEl.innerHTML = birthYear;
    fmonthsEl.innerHTML = birthMonth;
    fdaysEl.innerHTML = birthDay;
    fhoursEl.innerHTML = formatTime(currenthour);
    fminsEl.innerHTML = formatTime(currentmins);
    fsecondsEl.innerHTML = formatTime(currentsec);
    
}
function ageCalculationSoso(dob) {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const today = new Date();
    
    const year = dob.getFullYear();
    const month = dob.getMonth() + 1;
    const day = dob.getDate();
    const hour = dob.getHours();
    const mins = dob.getMinutes();
    const sec = dob.getSeconds();
    
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
    const currenthour = today.getHours();
    const currentmins =today.getMinutes();
    const currentsec = today.getSeconds();
    
    birthYear = currentYear - year;
    
    if (currentMonth >= month) {
      birthMonth = currentMonth - month;
    } else {
      birthYear--;
      birthMonth = 12 + currentMonth - month;
    }
    
    if (currentDay >= day) {
      birthDay = currentDay - day;
    } else {
      birthMonth--;
      let days = months[currentMonth - 2];
      birthDay = days + currentDay - day;
    
      if (birthMonth < 0) {
        birthMonth = 11;
        birthYear--;
      }
    }
    
    syearsEl.innerHTML = birthYear;
    smonthsEl.innerHTML = birthMonth;
    sdaysEl.innerHTML = birthDay;
    shoursEl.innerHTML = formatTime(currenthour);
    sminsEl.innerHTML = formatTime(currentmins);
    ssecondsEl.innerHTML = formatTime(currentsec);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

ageCalculation(dobFahad);
ageCalculationAnoud(dobAnoud)
ageCalculationSoso(dobSoso)
ageCalculationFaisal(dobFaisal);
setInterval(ageCalculation, 1000, dobFahad );
setInterval(ageCalculationAnoud, 1000, dobAnoud);
setInterval(ageCalculationSoso, 1000, dobSoso)
setInterval(ageCalculationFaisal, 1000, dobFaisal );
// setInterval(function() { ageCalculation(new Date('26 jan 2015')) }, 1000);
// setInterval(function() { ageCalculation(new Date('29 jun 1983')) }, 1000);
// setInterval(function() { ageCalculation(new Date('29 jun 1983')) }, 1000);

// END SULOTION 2
