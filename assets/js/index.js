window.onload = () => {
  // HIDE THE PHISHING WARNING CONTAINER
  const closeButton = document.getElementById("phishing-banner-close");
  closeButton.addEventListener("click", () => {
    closeButton.parentNode.parentNode.style.display = "none";
    closeButton.parentNode.parentNode.parentNode.style.height = "3.5rem";
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
};
