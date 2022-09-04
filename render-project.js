const projectList = document.querySelectorAll("[data-project]");
const leftSliderLink = document.querySelector(".left-slider");
const rightSliderLink = document.querySelector(".right-slider");
const leftSliderText = document.querySelector(".left-slider-title");
const rightSliderText = document.querySelector(".right-slider-title");

const urlParams = new URLSearchParams(window.location.search);
const projectNumber = parseInt(urlParams.get("project"));

const projectNames = ["Manage", "Bookmark", "Insure", "Fylo"];

// Render project details depending on URL parameters
renderProject(projectNumber);

function renderProject(projectNumber) {
  projectList[projectNumber - 1].removeAttribute("hidden");
  renderSlider(projectNumber);
}

function renderSlider(projectNumber) {
  leftSliderText.innerText = projectNames[projectNumber - 2];
  rightSliderText.innerText = projectNames[projectNumber];

  leftSliderLink.href = `./project.html?project=${projectNumber - 1}`;
  rightSliderLink.href = `./project.html?project=${projectNumber + 1}`;

  //   render slider details for first and last project
  const numberProjects = projectNames.length;
  if (projectNumber === 1) {
    leftSliderText.innerText = projectNames[numberProjects - 1];
    leftSliderLink.href = `./project.html?project=${numberProjects}`;
  } else if (projectNumber === numberProjects) {
    rightSliderText.innerText = projectNames[0];
    rightSliderLink.href = `./project.html?project=1`;
  }
}
