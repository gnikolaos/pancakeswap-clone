window.onload = () => {
  // CHECK PHISHING-WARNING POPUP'S STATUS
  let hasPhishingPopUp = "true";
  const mainContent = document.querySelector(".main-content");
  const phishingWarning = document.querySelector(".phishing-warning-container");
  if (localStorage.getItem("hasPhishingPopUp")) {
    hasPhishingPopUp = localStorage.getItem("hasPhishingPopUp");
    console.log("POP UP IS " + hasPhishingPopUp);
    if (hasPhishingPopUp === "false") {
      console.log("iamIN FALSE");
      phishingWarning.style.display = "none";
      mainContent.style.marginTop = "3.563rem";
    } else {
      console.log("iamIN TRUE");
      phishingWarning.style.display = "block";
    }
  }

  // HIDE THE PHISHING WARNING CONTAINER
  const closeButton = document.getElementById("phishing-banner-close");
  closeButton.addEventListener("click", () => {
    closeButton.parentNode.parentNode.style.display = "none";
    closeButton.parentNode.parentNode.parentNode.style.height = "3.5rem";
    mainContent.style.marginTop = "3.563rem";
    hasPhishingPopUp = localStorage.setItem("hasPhishingPopUp", "false");
  });

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
};
