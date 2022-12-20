let table1 = document.querySelector(".first-table");
let table2 = document.querySelector(".second-table");
let width = table2.clientWidth;
console.log(width);
//table.style.width=width is not working
table1.style.width = "853px";
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
