function scrollToProjects() {
  const projectsSection = document.getElementById("projects-section");
  projectsSection.scrollIntoView({ behavior: "smooth" });
}

const navbarProjectsButton = document.getElementById("navbar-projects-button");
navbarProjectsButton.addEventListener("click", scrollToProjects);

function scrollToAbout() {
  const aboutSection = document.getElementById("about-section");
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

const navbarAboutButton = document.getElementById("navbar-about-button");
navbarAboutButton.addEventListener("click", scrollToAbout);

function sendEmail() {
  alert("Email sent successfully!"); // Placeholder for demonstration
}
