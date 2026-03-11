const button = document.getElementById("toggle-btn");
const extraText = document.getElementById("extra-text");
const darkModeButton = document.getElementById("dark-mode-btn");

button.addEventListener("click", function () {
  if (extraText.style.display === "block") {
    extraText.style.display = "none";
    button.textContent = "Show More";
  } else {
    extraText.style.display = "block";
    button.textContent = "Show Less";
  }
});

darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });