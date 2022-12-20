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

//change table simultaneously
//element.classList.add("my-class")
/*
let content1=document.querySelector(".content1");

for(let i=0;i<5000000;i++){
if(i<10000){
content1.classList.add("changeClass");
}
else{
  content1.classList.remove("changeClass");
}
}*/
