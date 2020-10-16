//https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView  документация

function scrollToTop() {
  document.body.scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", goOnTop);

function goOnTop() {
  if (
    //for different browsers
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    document.querySelector(".scrollup-button").classList.add("show") = "flex";
  } else {
    document
      .querySelector(".scrollup-button")
      .classList.remove("show") = "none";
  }
}

//DATE
var d = new Date();
var day = new Array(
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
);

var month = new Array(
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря"
);

var today =
  day[d.getDay()] +
  " " +
  d.getDate() +
  " " +
  month[d.getMonth()] +
  " " +
  d.getFullYear() +
  " г.";

document.querySelector(".date").innerHTML = today; // showing my date in HTML

//JQuery language form changes
$(document).ready(function () {
  $("select").niceSelect();
});
