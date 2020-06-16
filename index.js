"use strict";

const date = new Date();

const weekDays = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const months = [
  "Января",
  "Февраля",
  "Мартa",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августa",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const currentDay = weekDays.filter(
  (item, index) => index + 1 === date.getDay()
);
const currentMonth = months.filter(
  (item, index) => index === date.getMonth()
);

const getHoursString = () => {
    const hours = date.getHours();
    if (hours === 1 || hours === 21) {
        return date.getHours() + " час";
    } else if (5 <= hours <= 20 || hours === 0) {
        return hours + " часов";
    } else {
        return hours + " часа";
    }
};

const getMinutesString = () => {
    const minutesEnd = Number(date.getMinutes().toString().slice(-1));
    if (minutesEnd === 1) {
        return date.getMinutes() + " минута";
    } else if (minutesEnd === 2 || minutesEnd === 3 || minutesEnd === 4) {
        return date.getMinutes() + " минуты";
    } else {
        return date.getMinutes() + " минут";
    }
};

const getSecondsString = () => {
    const secondsEnd = Number(date.getSeconds().toString().slice(-1));
    if (secondsEnd === 1) {
        return date.getSeconds() + " секунда";
    } else if (secondsEnd === 2 || secondsEnd === 3 || secondsEnd === 4) {
        return date.getSeconds() + " секунды";
    } else {
        return date.getSeconds() + " секунд";
    }
};

const dateString =
  "Сегодня " + currentDay + ", " +
  date.getDay() + " " + currentMonth + " " + date.getFullYear() + " года, " +
  getHoursString() + " " + getMinutesString() + " " + getSecondsString();

console.log(dateString);