window.onload = () => {
  // CHECK PHISHING-WARNING POPUP'S STATUS
  let hasPhishingPopUp = "false";
  const mainContent = document.querySelector(".main-content");
  const phishingWarning = document.querySelector(".phishing-warning-container");

  /** If there isn't a hasPhishingPopUp key in the local storage
   * make the phishingWarning container a block else check the value
   * of the key and act accordingly.
   */
  if (!Boolean(localStorage.getItem("hasPhishingPopUp"))) {
    hasPhishingPopUp = "true";
    phishingWarning.style.display = "block";
    mainContent.style.marginTop = "7.938rem";
  } else {
    if (localStorage.getItem("hasPhishingPopUp") === "true") {
      hasPhishingPopUp = "true";
      phishingWarning.style.display = "block";
      mainContent.style.marginTop = "7.938rem";
    } else {
      phishingWarning.style.display = "none";
      mainContent.style.marginTop = "3.563rem";
    }
  }

  // GET LATEST PRICE OF CAKE
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.coingecko.com/api/v3/simple/price?ids=pancakeswap-token&vs_currencies=usd&precision=3"
  );

  xhr.onload = () => {
    if (xhr.status == 200) {
      const data = JSON.parse(xhr.responseText);
      const appendText = document.getElementById("cake-price");
      // updates the site's title
      document.title =
        "Home | PancakeSwap - " + "$" + data["pancakeswap-token"]["usd"];
      // updates the cake price in navbar options section
      appendText.innerHTML =
        appendText.innerHTML + data["pancakeswap-token"]["usd"];
    } else {
      document.title = "error";
    }
  };
  xhr.send();

  // SHOW & HIDE THE NAVBAR ON SCROLL
  let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    let goUp = document.getElementById("scrollUp");
    if (hasPhishingPopUp === "true") {
      if (prevScrollPos > currentScrollPos || currentScrollPos <= 126) {
        document.getElementById("head-area").style.top = "0";
      } else {
        document.getElementById("head-area").style.top = "-7.875rem"; // 126px
      }
    } else {
      if (prevScrollPos > currentScrollPos || currentScrollPos <= 56) {
        document.getElementById("head-area").style.top = "0";
      } else {
        document.getElementById("head-area").style.top = "-3.5rem"; // 56px
      }
    }
    prevScrollPos = currentScrollPos;

    // Hiding the scroll to page top button at 400px away from the navbar
    if (
      document.documentElement.scrollTop > 400 ||
      document.body.scrollTop > 400
    ) {
      goUp.style.display = "inline-flex";
    } else {
      goUp.style.display = "none";
    }
  };

  // Slide-3 countdown timer
  // Get the current day and timing
  const countDownToDate = new Date();
  // Get the hour
  const hours = countDownToDate.getHours();
  // Generate a random number between 1 and 5
  const randNum = Math.floor(Math.random() * 5) + 1;
  // Finally set a random hour to the countdown date
  countDownToDate.setHours(hours + randNum);
  // Get the remaining hours - mins - secs to countdown date
  function getRemainingTime(countDownToDate) {
    const remTime = Date.parse(countDownToDate) - Date.parse(new Date());
    const remSecs = Math.floor((remTime / 1000) % 60);
    const remMins = Math.floor((remTime / 1000 / 60) % 60);
    const remHours = Math.floor((remTime / (1000 * 60 * 60)) % 24);
    return {
      remTime,
      remSecs,
      remMins,
      remHours,
    };
  }
  // Output the data inside the -id-
  function initClockTimer(id, countDownToDate) {
    const timer = document.getElementById(id);
    const hourSpan = document.querySelector(".clock-timer-hours");
    const minsSpan = document.querySelector(".clock-timer-mins");
    const secsSpan = document.querySelector(".clock-timer-secs");

    function updateClockTimer() {
      const r = getRemainingTime(countDownToDate);
      hourSpan.innerHTML = r.remHours;
      minsSpan.innerHTML = ("0" + r.remMins).slice(-2); // Add leading zero to the mins value
      secsSpan.innerHTML = ("0" + r.remSecs).slice(-2); // Add leading zero to the seconds value
      if (r.remTime <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClockTimer(); // Run function once at first to avoid delay
    const timeinterval = setInterval(updateClockTimer, 1000);
  }

  initClockTimer("clock-timer", countDownToDate);

  // SLIDER

  // Get the latest slider's width
  let sliderWidth = document.querySelector(".scroller-wrapper").offsetWidth;
  function updateSliderWidth() {
    sliderWidth = document.querySelector(".scroller-wrapper").offsetWidth;
    return sliderWidth;
  }

  // Pagination bullets
  const firstBullet = document.querySelector("#first");
  const middleBullet = document.querySelector("#middle");
  const lastBullet = document.querySelector("#last");
  // Slider's variables
  const SLIDERTIME = 600;
  const allSlides = [...document.querySelectorAll(".slides")];
  let sliderWrapper = document.querySelector(".scroller-wrapper");
  let slideInterval;
  let activeBullet = document.querySelector(
    ".scroller-pagination-bullet-active"
  );
  let activeSlide = "first";
  let posX1 = 0;
  let posX2 = 0;
  let movedBy = 0;
  let posInitial;
  let threshold = 100;

  // Event listener to detect window resize and handle it
  window.onresize = () => moveSlide(activeSlide);

  function initSlider() {
    sliderWrapper.setAttribute(
      "style",
      `transition: transform ${SLIDERTIME}ms ease;
                     animation-duration: ${SLIDERTIME}ms
        `
    );
  }

  // Function to move the slides
  function moveSlide(slide) {
    // Get the full width of the slider (all slides inlcuded)
    width = updateSliderWidth();
    switch (slide) {
      case "first":
        sliderWrapper.style.transform = `translate3d(0px, 0px, 0px)`;
        break;
      case "middle":
        sliderWrapper.style.transform = `translate3d(-${width}px, 0px, 0px)`;
        break;
      case "last":
        sliderWrapper.style.transform = `translate3d(-${
          width * 2
        }px, 0px, 0px)`;
        break;
    }
  }

  // Change slide upon click
  function changeSlide(e) {
    const sliderBox = document.querySelector(".home-1-scroller");
    const sliderBgGreen =
      "linear-gradient(rgb(0, 191, 165) 0%, rgb(0, 90, 90) 100%)";
    const sliderBgPurple =
      "linear-gradient(0deg, rgb(69, 42, 122) 0%, rgb(118, 69, 217) 100%)";
    switch (e) {
      case "first":
        document.getElementById("slide-2").style.opacity = "0";
        document.getElementById("slide-3").style.opacity = "0";
        sliderBox.style.setProperty("--sliderBg", sliderBgGreen);
        document.getElementById("slide-1").style.opacity = "1";
        moveSlide(e);
        break;
      case "middle":
        document.getElementById("slide-1").style.opacity = "0";
        document.getElementById("slide-3").style.opacity = "0";
        sliderBox.style.setProperty("--sliderBg", sliderBgPurple);
        document.getElementById("slide-2").style.opacity = "1";
        moveSlide(e);
        break;
      case "last":
        document.getElementById("slide-1").style.opacity = "0";
        document.getElementById("slide-2").style.opacity = "0";
        sliderBox.style.setProperty("--sliderBg", sliderBgPurple);
        document.getElementById("slide-3").style.opacity = "1";
        moveSlide(e);
        break;
    }
  }

  // Slider - event listeners
  // Click events
  firstBullet.addEventListener("click", actionHandler);
  middleBullet.addEventListener("click", actionHandler);
  lastBullet.addEventListener("click", actionHandler);

  // Mouse and Touch events
  sliderWrapper.onmousedown = actionHandler;
  sliderWrapper.addEventListener("touchstart", actionHandler);
  sliderWrapper.addEventListener("touchend", actionHandler);
  sliderWrapper.addEventListener("touchmove", actionHandler);

  function actionHandler(e) {
    // Get the active bullet
    activeBullet = document.querySelector(".scroller-pagination-bullet-active");
    // If the event target is auto triggered
    if (e.target.classList.contains("autoSlide")) {
      // Remove the active class from the previous active bullet
      if (activeBullet) {
        activeBullet.classList.remove("scroller-pagination-bullet-active");
      }
      // Assume that the target is the new active bullet
      activeBullet = e.target;
      activeBullet.classList.remove("autoSlide");
      // Add the active class to the new active bullet
      activeBullet.classList.add("scroller-pagination-bullet-active");
    } else if (e.target instanceof HTMLSpanElement) {
      // If the event target is an actual bullet click
      if (activeBullet) {
        activeBullet.classList.remove("scroller-pagination-bullet-active");
      }
      e.target.classList.add("scroller-pagination-bullet-active");
      activeBullet = e.target;
      // Clear the interval when a bullet is clicked
      clearInterval(slideInterval);
      // Start the auto slide again
      startAutoSlide();
    } else {
      // Handle the touch events and mouse drag
      // Get the active slide
      posInitial = activeBullet;
      // Event type functions
      function dragStart(e) {
        e = e || window.event;
        e.preventDefault();
        if (e.type === "touchstart") {
          posX1 = e.touches[0].clientX;
        } else {
          posX1 = e.clientX;
          sliderWrapper.onmouseup = dragEnd;
          sliderWrapper.onmousemove = dragAction;
        }
      }

      function dragAction(e) {
        e = e || window.event;
        if (e.type === "touchmove") {
          posX2 = e.touches[0].clientX;
        } else {
          posX2 = e.clientX;
        }
      }

      function dragEnd() {
        // Stop the mouse actions
        sliderWrapper.onmouseup = null;
        sliderWrapper.onmousemove = null;
        // Calcute the events position's difference
        movedBy = posX1 - posX2;
        // Remove the active status
        activeBullet.classList.remove("scroller-pagination-bullet-active");
        // Go to the next slide
        if (movedBy > threshold) {
          switch (activeBullet) {
            case firstBullet:
              activeBullet = document.querySelector("#middle");
              break;
            case middleBullet:
              activeBullet = document.querySelector("#last");
              break;
            case lastBullet:
              activeBullet = document.querySelector("#first");
              break;
          }
          // Set the new active bullet
          activeBullet.classList.add("scroller-pagination-bullet-active");
        } else if (movedBy < -threshold) {
          // Go to the previous slide
          switch (activeBullet) {
            case firstBullet:
              activeBullet = document.querySelector("#last");
              break;
            case middleBullet:
              activeBullet = document.querySelector("#first");
              break;
            case lastBullet:
              activeBullet = document.querySelector("#middle");
              break;
          }
          // Set the new active bullet
          activeBullet.classList.add("scroller-pagination-bullet-active");
        } else {
          // Cancel slide change
          activeBullet = posInitial;
          activeBullet.classList.add("scroller-pagination-bullet-active");
        }
        // Set the the new active bullet as the target
        actionHandler({ target: activeBullet });
        // Clear the interval when the active bullet has changed
        clearInterval(slideInterval);
        // Start the auto slide again
        startAutoSlide();
      }

      // Handle the event type and call the correct function
      if (e.type === "touchstart" || e.type === "mousedown") {
        dragStart(e);
      } else if (e.type === "touchmove") {
        dragAction(e);
      } else if (e.type === "touchend") {
        dragEnd();
      }
    }

    // Update the slide bases on the active bullet
    switch (activeBullet) {
      case firstBullet:
        changeSlide("first");
        activeSlide = "first";
        break;
      case middleBullet:
        changeSlide("middle");
        activeSlide = "middle";
        break;
      case lastBullet:
        changeSlide("last");
        activeSlide = "last";
        break;
    }
  }

  // init the slider
  initSlider();
  // Start automatic slides
  startAutoSlide();

  function startAutoSlide() {
    // Get the active bullet
    activeBullet = document.querySelector(".scroller-pagination-bullet-active");
    // Get the index of the active bullet
    let activeIndex = Array.from(
      document.querySelectorAll(".scroller-pagination-bullet")
    ).indexOf(activeBullet);
    slideInterval = setInterval(() => {
      activeIndex = (activeIndex + 1) % 3;
      let newActiveBullet = document.querySelectorAll(
        ".scroller-pagination-bullet"
      )[activeIndex];
      newActiveBullet.classList.add("autoSlide");
      actionHandler({ target: newActiveBullet });
    }, 555000);
  }
};

// HIDE THE PHISHING WARNING CONTAINER
function closeBanner() {
  document.querySelector(".phishing-warning-container").style.display = "none";
  document.querySelector(".head-area").style.height = "3.5rem";
  document.querySelector(".main-content").style.marginTop = "3.563rem";
  hasPhishingPopUp = localStorage.setItem("hasPhishingPopUp", "false");
}

// Footer related
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

// function to return to top of page when click
function toPageTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
