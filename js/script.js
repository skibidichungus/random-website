const button = document.getElementById("toggle-btn");
const extraText = document.getElementById("extra-text");
const darkModeButton = document.getElementById("dark-mode-btn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeButton.textContent = "Light Mode";
} else {
    darkModeButton.textContent = "Dark Mode";
}
  
darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      darkModeButton.textContent = "Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      darkModeButton.textContent = "Dark Mode";
    }
});

button.addEventListener("click", function () {
  if (extraText.style.display === "block") {
    extraText.style.display = "none";
    button.textContent = "Show More";
  } else {
    extraText.style.display = "block";
    button.textContent = "Show Less";
  }
});