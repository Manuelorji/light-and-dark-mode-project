const navLinks = document.getElementsByClassName("nav-link");
const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const nav = document.querySelector("nav");
const toggleIcon = document.getElementById("toggle-icon");
const textBox = document.querySelector(".text-box");
const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");

// nav links active functionality
Array.from(navLinks).forEach((link) => {
  link.addEventListener("click", (e) => {
    const currentActiveLink = document.getElementsByClassName("active");

    if (currentActiveLink.length > 0) {
      //   currentActiveLink[0].className = currentActiveLink[0].className.replace(
      //     " active",
      //     ""
      //   );#
      currentActiveLink[0].classList.remove("active");
    }
    e.target.classList.add("active");
  });
});

// imageMode
function imageMode(color) {
  image1.src = `/images/undraw_complete_design_re_h75h -${color} mode.svg`;
  image2.src = `/images/undraw_mobile_development_re_wwsn-${color} mode.svg`;
  image3.src = `/images/undraw_to_the_moon_re_q21i--${color} mode.svg`;
}

// dark mode
function darkMode() {
  nav.style.background = "rgb(0 0 0 / 50%)";
  textBox.style.background = "rgb(255 255 255/ 50%)";
  toggleIcon.children[0].textContent = "Dark mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
}

// light mode
function lightMode() {
  nav.style.background = "rgb(255 255 255/ 50%)";
  textBox.style.background = "rgb(0 0 0/ 50%)";
  toggleIcon.children[0].textContent = "Light mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  imageMode("light");
}

// switch theme functionality
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// switch theme event listener
toggleSwitch.addEventListener("change", switchTheme);

// check localStorage for theme
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}

// hamburger menu-btn functionality]
menuBtn.addEventListener("click", () => {
  menu.hidden = false;
});
closeBtn.addEventListener("click", () => {
  menu.hidden = true;
});
