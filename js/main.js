// Add Class Show To Setting Box
let barSetting = document.querySelector(".setting-box .bars .fa-gear");
let settingBox = document.querySelector(".setting-box");
barSetting.onclick = function () {
  settingBox.classList.toggle("show");
  this.classList.toggle("fa-spin");
};
document.addEventListener("click", (e) => {
  if (e.target !== settingBox && e.target !== barSetting) {
    if (settingBox.classList.contains("show")) {
      settingBox.classList.remove("show");
      barSetting.classList.remove("fa-spin");
    }
  }
});
settingBox.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Change Themes To Dark Or Light
let themes = document.querySelector(".setting-box .theme");
let themeColor = localStorage.getItem("Dark-color");
if (themeColor !== null) {
  if (themeColor === "#fff") {
    themes.classList.remove("fa-moon");
    themes.classList.add("fa-sun");
    document.documentElement.style.setProperty("--black-color", "#fff");
    document.documentElement.style.setProperty("--light-color", "#101010");
    document.documentElement.style.setProperty("--bar-color", "#2c2c2c");
  } else {
    themes.classList.remove("fa-sun");
    themes.classList.add("fa-moon");
    document.documentElement.style.setProperty("--black-color", "#101010");
    document.documentElement.style.setProperty("--light-color", "#fff");
    document.documentElement.style.setProperty("--bar-color", "#ddd");
  }
}

themes.onclick = function () {
  if (themes.classList.contains("fa-moon")) {
    themes.classList.remove("fa-moon");
    themes.classList.add("fa-sun");

    // Add Color To LocalStorage
    localStorage.setItem("Dark-color", "#fff");
    localStorage.setItem("Light-color", "#101010");
    localStorage.setItem("bar-color", "#2c2c2c");
    // Change To Dark Color
    document.documentElement.style.setProperty("--black-color", "#fff");
    document.documentElement.style.setProperty("--light-color", "#101010");
    document.documentElement.style.setProperty("--bar-color", "#2c2c2c");
  } else {
    themes.classList.remove("fa-sun");
    themes.classList.add("fa-moon");
    // Add Color To LocalStorage
    localStorage.setItem("Dark-color", "#101010");
    localStorage.setItem("Light-color", "#fff");
    localStorage.setItem("bar-color", "#ddd");
    // Change To Light Color
    document.documentElement.style.setProperty("--black-color", "#101010");
    document.documentElement.style.setProperty("--light-color", "#fff");
    document.documentElement.style.setProperty("--bar-color", "#ddd");
  }
};

// Add Class Active to Links Header
let allLinks = document.querySelectorAll("header .navigation li");
let allSec = document.querySelectorAll("section");
// console.log(allLinks);
allLinks.forEach((li) => {
  li.addEventListener("click", (e) => {
    allLinks.forEach((li) => {
      li.children[0].classList.remove("active");
    });
    li.children[0].classList.add("active");

    // To Show Section
    allSec.forEach((ele) => {
      let id = ele.getAttribute("id");
      if (li.children[0].dataset.link === id) {
        ele.classList.add("active");
      } else {
        ele.classList.remove("active");
      }
    });
  });
});

let spanSkill = document.querySelectorAll(".about .about-content .skill span");
spanSkill.forEach((span) => {
  span.style.width = span.dataset.prog;
});

// Change Color And Active
let allColor = document.querySelectorAll(".color-list .list li");
let mainColor = localStorage.getItem("Main-color");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);

  allColor.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color === mainColor) {
      li.classList.add("active");
    }
  });
}
allColor.forEach((li) => {
  li.addEventListener("click", function (e) {
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    localStorage.setItem("Main-color", e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});

// Add Age
let birthday = new Date("Nov 22,1999").getTime();
let dateNow = new Date().getTime();
let dateDiff = dateNow - birthday;

let years = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
document.querySelector(".about .about-content .age").innerHTML = years;

// Show Skills
// let spanSkill = document.querySelectorAll(".about .about-content .skill span");
// let aboutSection = document.querySelector(".about");

// window.onscroll = function () {
//   if (window.scrollX >= aboutSection.offsetTop - 20) {
//     spanSkill.forEach((span) => {
//       span.style.width = span.dataset.prog;
//     });
//   }
// };

let boxSkill = document.querySelectorAll(".skills .content .developer .box");
let allSkills = document.querySelectorAll(
  ".skills .content .skill-content .skill"
);
boxSkill.forEach((box) => {
  box.addEventListener("click", removeActive);
  box.addEventListener("click", manageSkill);
});
function removeActive() {
  boxSkill.forEach((box) => {
    box.classList.remove("active");
    this.classList.add("active");
  });
}
function manageSkill() {
  allSkills.forEach((skill) => {
    skill.classList.remove("active");
  });
  document
    .querySelectorAll(this.dataset.skill)
    .forEach((ele) => ele.classList.add("active"));
}
// loading
function loader() {
  document.querySelector(".loading").classList.add("fade-out");
}
function fadeout() {
  setInterval(loader, 3000);
}
window.onload = fadeout;

// Typing Script
const typed = new Typed(".typing", {
  strings: ["Web Developer", "FrontEnd Developer", "IT"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

// Jquery For Progress Language
$(function () {
  $(".chart").easyPieChart({
    size: 80,
    barColor: "#7a7a7a",
    scaleColor: false,
    lineWidth: 6,
    trackColor: "#101010",
    lineCap: "circle",
    animate: 1100,
  });
});
