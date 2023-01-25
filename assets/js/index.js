// toggle dark mode for the page, buttons text color, and button svg color
function changeColor() {
  let color = document.querySelector("body").classList.toggle("bgColor");
  document.getElementById("warningNo").classList.toggle("active-sun");
  document.getElementById("likeMoon").classList.toggle("disabled-moon");
  document
    .getElementsByClassName("btn-color")[0]
    .classList.toggle("btn-color-change");
  document
    .getElementsByClassName("btn-color")[1]
    .classList.toggle("btn-color-change");
  document
    .getElementsByClassName("btn-color")[2]
    .classList.toggle("btn-color-change");
  document
    .getElementsByClassName("btn-color")[3]
    .classList.toggle("btn-color-change");

  console.log(document.getElementById("warningNo").classList);
}

// Hiding the scroll to page top button at 200px away from the navbar
window.onscroll = () => {
  let goUp = document.getElementById("scrollUp");
  if (
    document.documentElement.scrollTop > 200 ||
    document.body.scrollTop > 200
  ) {
    goUp.style.display = "inline-flex";
  } else {
    goUp.style.display = "none";
  }
};

// function to return to top of page when click
function toPageTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
