window.onload = () => {
  // HIDE THE PHISHING WARNING CONTAINER
  const closeButton = document.getElementById("phishing-banner-close");
  closeButton.addEventListener("click", () => closeButton.parentNode.parentNode.style.display = "none");

  // UPDATE THE SITE'S TITLE FOR PANCAKES CURRENT PRICE
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://api.coingecko.com/api/v3/simple/price?ids=pancakeswap-token&vs_currencies=usd");

  xhr.onload = () => {
      if (xhr.status == 200) {
          const data =  JSON.parse(xhr.responseText);
          document.title = "Home | PancakeSwap - " +"$" + data["pancakeswap-token"]["usd"]; 

      }else{
        document.title = "error";
      }

  };

  xhr.send();
  
}; 