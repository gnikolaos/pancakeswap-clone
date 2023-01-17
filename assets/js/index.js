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
  };

  // SLIDER

  // Event listener to detect screen's window resize
  let sliderWidth = document.querySelector(".scroller-wrapper").offsetWidth;
  function updateSliderWidth() {
    let sliderWidth = document.querySelector(".scroller-wrapper").offsetWidth;
    return sliderWidth;
  }
  window.onresize = updateSliderWidth;

  // Pagination bullets
  const firstBullet = document.querySelector("#first");
  const middleBullet = document.querySelector("#middle");
  const lastBullet = document.querySelector("#last");
  // Slider's variables
  const SLIDERTIME = 600;
  const allSlides = [...document.querySelectorAll(".slides")];
  let sliderWrapper = document.querySelector(".scroller-wrapper");
  let slideInterval;
  let posX1 = 0;
  let posX2 = 0;
  let movedBy = 0;
  let posInitial;
  let threshold = 100;

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
        sliderWrapper.style.transform = "translate3d(0px, 0px, 0px)";
        break;
      case "middle":
        sliderWrapper.style.transform =
          "translate3d(-" + width + "px" + ", 0px, 0px)";
        break;
      case "last":
        sliderWrapper.style.transform =
          "translate3d(-" + width * 2 + "px" + ", 0px, 0px)";
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
    let activeBullet = document.querySelector(
      ".scroller-pagination-bullet-active"
    );
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
      e = e || window.event;
      e.preventDefault();

      switch (e.type) {
        case "touchstart":
          // Get the active slide
          posInitial = activeBullet;
          // Get the touch event's initial position
          posX1 = e.touches[0].clientX;
          break;
        case "touchmove":
          posX2 = e.touches[0].clientX;
          break;
        case "touchend":
          movedBy = posX1 - posX2;
          // Remove the active status
          activeBullet.classList.remove("scroller-pagination-bullet-active");
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
          } else if (movedBy < -threshold) {
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
          } else {
            activeBullet = posInitial;
          }
          break;
      }

      // Add active status to the newly selected slide
      activeBullet.classList.add("scroller-pagination-bullet-active");
      // Clear the interval when a bullet is clicked
      clearInterval(slideInterval);
      // Start the auto slide again
      startAutoSlide();
    }

    // Update the slide bases on the active bullet
    console.log("change slide to: " + activeBullet.id);
    switch (activeBullet) {
      case firstBullet:
        changeSlide("first");
        break;
      case middleBullet:
        changeSlide("middle");
        break;
      case lastBullet:
        changeSlide("last");
        break;
    }
  }

  // init the slider
  initSlider();
  // Start automatic slides
  startAutoSlide();

  function startAutoSlide() {
    // Get the active bullet
    let activeBullet = document.querySelector(
      ".scroller-pagination-bullet-active"
    );
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
    }, 4000);
  }
};

// HIDE THE PHISHING WARNING CONTAINER
function closeBanner() {
  document.querySelector(".phishing-warning-container").style.display = "none";
  document.querySelector(".head-area").style.height = "3.5rem";
  document.querySelector(".main-content").style.marginTop = "3.563rem";
  hasPhishingPopUp = localStorage.setItem("hasPhishingPopUp", "false");
}
