gsap.registerPlugin(scrollTo);

function menuSelected(e) {
  if (e.target.className.indexOf("jmp") !== -1) {
    let nameOfJmp = e.target.innerText.toLowerCase();
    if (nameOfJmp.indexOf("home") !== -1) {
      gsap.to(window, { scrollTo: "#home" });
    } else if (nameOfJmp.indexOf("about") !== -1) {
      gsap.to(window, { scrollTo: "#aboutme" });
    } else if (nameOfJmp.indexOf("skills") !== -1) {
      gsap.to(window, { scrollTo: "#skills" });
    } else if (nameOfJmp.indexOf("projects") !== -1) {
      gsap.to(window, { scrollTo: "#projects" });
    } else if (nameOfJmp.indexOf("contact") !== -1) {
      gsap.to(window, { scrollTo: "#contactMe" });
    }
  }
}
document.querySelector(".opt").addEventListener("click", menuSelected);
document.querySelector(".optionBar").addEventListener("click", menuSelected);
