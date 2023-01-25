//to add animation for tables first decleartion of table variable
let table1 = document.querySelector(".first-table");
let table2 = document.querySelector(".second-table");
//to make both table same length
let width = table2.clientWidth;

//when clicking button table change
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
//when first table is shown in the page counter starts

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
} //table content first not seen in the page when the table is shown in the page then elements are shown and start to count

let head = document.querySelectorAll(".head");
let subhead = document.querySelectorAll(".subhead");
let number = document.querySelectorAll(".number");

// intersection observer API
const callBackFunction = function (entries) {
  console.log(entries[0]);

  setTimeout(() => {
    for (let i = 0; i < head.length; i++) {
      head[i].style.visibility = "visible";
      subhead[i].style.visibility = "visible";
      number[i].style.visibility = "visible";
    }
    timer(".number1", 127);
    timer(".number2", 121);
    timer(".number3", 114);
    timer(".number4", 103);
    timer(".number5", 91);
  }, 4000);
};
const observer = new IntersectionObserver(callBackFunction, {
  threshold: 0,
});
observer.observe(table1);
setTimeout(() => observer.unobserve(table1), 5000);

//to add animation for table element
//declaration of every unit of tables

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

//every 5 second table change
//when table change animation is start for the second table

function change(element1, element2) {
  setInterval(function () {
    setTimeout(() => {
      changeTable();
    }, 1000);

    if (table1.style.display !== "none") {
      element1.classList.add("addingClass1");
      element1.classList.remove("addingClass2");
      element2.classList.add("addingClass2");
      element2.classList.remove("addingClass1");
    } else {
      element1.classList.add("addingClass2");
      element1.classList.remove("addingClass1");
      element2.classList.add("addingClass1");
      element2.classList.remove("addingClass2");
    }
  }, 4000);
}

change(section1, section1_vs);
change(section2, section2_vs);
change(section3, section3_vs);
change(section4, section4_vs);
change(section5, section5_vs);

//theme adjustment
/* const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("bgColor");
}); */
