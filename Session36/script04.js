let modeToggle = document.querySelector(".dark-mode-toggle");
let body = document.body;
let isDarkMode = localStorage.getItem("darkMode");

if(isDarkMode === "on") {
  body.className = "dark-mode";
}
modeToggle.onclick = function () {
  if(body.className === "dark-mode") {
    body.className = ""
    localStorage.setItem("darkMode", "off")
  } else {
    body.className = "dark-mode"
    localStorage.setItem("darkMode", "on")
  }
};
