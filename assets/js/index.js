window.onload = () => {
  // HIDE THE PHISHING WARNING CONTAINER
  const closeButton = document.getElementById("phishing-banner-close");
  closeButton.addEventListener("click", () => closeButton.parentNode.parentNode.style.display = "none");
}; 