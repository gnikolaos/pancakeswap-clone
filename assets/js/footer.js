// function changeColor() {
//     document.body.style.backgroundColor = 'white';
// }

// function changeColor() {
//     const color = document.querySelector('body');
//     color.c lassList.toggle('bgColor');
// }


function changeColor() {
    let color = document.querySelector('body').classList.toggle('bgColor');
    let color2 = document.getElementById('on-sm-screen').classList.toggle('bgColor');
    document.getElementById('warningNo').classList.toggle('active-sun');
    document.getElementById('likeMoon').classList.toggle('disabled-moon');

    console.log(document.getElementById("warningNo").classList);
}


window.onscroll = () => {
    let goUp = document.getElementById('scrollUp');
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        goUp.style.display = "inline-flex";
    } else {
        goUp.style.display = "none";
    }
}

// Window.onscroll = function() {scrollUp()};

// function scrollUp() {
//     if (document.body.scrollTop > 200 || document.Element.scrollTop > 200) {
//         scrollUp.style.display = 'inlineflex'
//     } else {
//         scrollUp.style.display = 'none';
//     }
// }

// window.onscroll = function() {scrollUp()};
// function top() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }


// Get the button:
// let scroll = document.getElementById("scrollUp");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = scrollFunction();

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function toPageTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}