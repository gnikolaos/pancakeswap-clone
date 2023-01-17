let table1 = document.querySelector(".first-table");
let table2 = document.querySelector(".second-table");
let width = table2.clientWidth;
console.log(width);
//table.style.width=width is not working
//table1.style.width = "853px";
console.log(table1.clientWidth);

function changeTable() {
  if (table1.style.display === "none") {
    table1.style.display = "block";
    table2.style.display = "none";
  } else {
    table1.style.display = "none";
    table2.style.display = "block";
  }
}

//timer function
function timer(className, condition) {
  let counts = setInterval(updated);
  let upto = 0;
  let element = document.querySelector(className).innerHTML;
  let count = document.querySelector(className);
  function updated() {
    count.innerHTML = ++upto + "%";
    if (upto === condition) {
      clearInterval(counts);
      count.innerHTML = element;
    }
  }
}
/* timer(".number1", 127);
timer(".number2", 121);
timer(".number3", 114);
timer(".number4", 103);
timer(".number5", 91);  */

const callBackFunction = function (entries) {
  console.log(entries[0]);
  timer(".number1", 127);
  timer(".number2", 121);
  timer(".number3", 114);
  timer(".number4", 103);
  timer(".number5", 91);
};
const observer = new IntersectionObserver(callBackFunction, {
  threshold: 0.5,
});
observer.observe(table1);
setTimeout(() => observer.unobserve(table1), 5000);

let section1 = document.querySelector(".section1");
let section1_vs = document.querySelector(".section1_vs");

let section2 = document.querySelector(".section2");
let section2_vs = document.querySelector(".section2_vs");

let section3 = document.querySelector(".section3");
let section3_vs = document.querySelector(".section3_vs");

let section4 = document.querySelector(".section4");
let section4_vs = document.querySelector(".section4_vs");

let section5 = document.querySelector(".section5");
let section5_vs = document.querySelector(".section5_vs");

function change(element1, element2) {
  var interval = 2000,
    i = 0;

  setInterval(function () {
    i++;
    if (i % 2 !== 0) {
      /*  table1.style.display = "block";
    table2.style.display = "none"; */
      element1.classList.add("section1Class");
      element1.classList.remove("section1_vsClass");
      element2.classList.add("section1_vsClass");
      element2.classList.remove("section1Class");
    } else {
      /*   table2.style.display = "block";
    table1.style.display = "none"; */
      element1.classList.add("section1_vsClass");
      element1.classList.remove("section1Class");
      element2.classList.add("section1Class");
      element2.classList.remove("section1_vsClass");
    }
  }, interval);
}

change(section1, section1_vs);
change(section2, section2_vs);
change(section3, section3_vs);
change(section4, section4_vs);
change(section5, section5_vs);
