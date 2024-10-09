document.getElementById('calc-age-btn').addEventListener('click', function (event) {
    event.preventDefault();

    let newDate = document.getElementById('birthdate').value;

    let birthDate = new Date(newDate);

    let currentDate = new Date();

    let ageMillieSeconds = currentDate - birthDate;

    let ageInSeconds = ageMillieSeconds / 1000;

    let totalSeconds = Math.floor(ageInSeconds);

    let years = Math.floor(totalSeconds / (60 * 60 * 24 * 30.4375 * 12));

    let months = Math.floor((totalSeconds / (60 * 60 * 24 * 30.4375)) % 12);

    let days = Math.floor((totalSeconds / (60 * 60 * 24)) % 30.4375);

    let hours = Math.floor((totalSeconds / (60 * 60)) % 24);

    let minutes = Math.floor((totalSeconds / (60)) % 60);

    let seconds = totalSeconds % 60;

if (seconds > totalSeconds) {
    alert('Pehle paida to huja phir Birthday dekhna');
    return
}

setInterval(() => {
   seconds++;

   if (seconds == 60) {
    minutes++
    seconds = 0;
   }

   if (minutes == 60) {
    hours++
    minutes = 0;
   }

   if (hours == 24) {
    days++
    hours = 0;
   }

   if (days == 30.4375) {
    months++
    days = 0;
   }

   if (months == 12) {
    years++
    months = 0;
   }

   document.getElementById('message').innerHTML = 'You are';
   document.getElementById('years').innerHTML = years;
   document.getElementById('months').innerHTML = months;
   document.getElementById('days').innerHTML = days;
   document.getElementById('hours').innerHTML = hours;
   document.getElementById('minutes').innerHTML = minutes;
   document.getElementById('seconds').innerHTML = seconds;
   document.getElementById('message2').innerHTML = 'Old';
}, 1000);

    let nextBirthDay = new Date(
        currentDate.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate(),
    );

    if (nextBirthDay < currentDate) {
        nextBirthDay.setFullYear(currentDate.getFullYear() + 1);
    }

    let timeDifference = nextBirthDay - currentDate;

    let nTotalSeconds = Math.floor(timeDifference / 1000);

    let nMonths = Math.floor((nTotalSeconds / (60 * 60 * 24 * 30.4375)) % 12);

    let nDays = Math.floor((nTotalSeconds / (60 * 60 * 24)) % 30.4375);

    let nHours = Math.floor((nTotalSeconds / (60 * 60)) % 24);

    let nMinutes = Math.floor((nTotalSeconds / (60)) % 60);

    let nSeconds = totalSeconds % 60;

setInterval(() => {
    nSeconds--;

    if (nSeconds < 0) {
        nSeconds = 59;
        nMinutes--;
    }

    if (nMinutes < 0) {
        nMinutes = 59;
        nHours--;
    }

    if (nHours < 0) {
        nHours = 23;
        nDays--;
    }

    if (nDays < 0) {
        nDays = 29.53125;
        nMonths--;
    }

    if (nMonths < 0) {
        nMonths = 11;
    }

   document.getElementById('monthsLeft').innerHTML = nMonths;
   document.getElementById('daysLeft').innerHTML = nDays;
   document.getElementById('hoursLeft').innerHTML = nHours;
   document.getElementById('minutesLeft').innerHTML = nMinutes;
   document.getElementById('secondsLeft').innerHTML = nSeconds;
}, 1000);

});