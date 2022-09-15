const days = document.getElementById('remainingDays');
const hours = document.getElementById('remainingHours');
const minutes = document.getElementById('remainingMinutes');
const seconds = document.getElementById('remainingSecs');

setInterval(function () {
    let dateNow = new Date();
    let nextYear = new Date(dateNow.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
    let secondsBeforeYearEnd = nextYear.getTime() - dateNow.getTime();
    let totalSecondsPerDay = 86400000;

    let getDays = (Math.floor(secondsBeforeYearEnd / totalSecondsPerDay)).toString().padStart(2, 0);
    let getHours = (24 - dateNow.getHours() - 1).toString().padStart(2, 0);
    let getMinutes = (60 - dateNow.getMinutes() - 1).toString().padStart(2, 0);
    let getSeconds = (60 - dateNow.getSeconds()).toString().padStart(2, 0);

    days.innerText = getDays;
    hours.innerText = getHours;
    minutes.innerText = getMinutes;
    seconds.innerText = getSeconds;
}, 1000);