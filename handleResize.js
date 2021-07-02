//lets quickly set the min-height of all panels to max screen height
function resizePanels() {
  if (screen.width > 500) {
    document.querySelectorAll(".panel").forEach((i) => {
      if (
        screen.height - (window.outerHeight - window.innerHeight) + 15 >
        window.innerHeight
      ) {
        i.style.minHeight =
          screen.height - (window.outerHeight - window.innerHeight) + 15 + "px";
      } else {
        i.style.minHeight = window.innerHeight + "px";
      }
    });
  }
}
resizePanels();

let maximumTop = 100;
function maxTop() {
  const connect = document.querySelector(".connect");

  if (parseFloat(window.getComputedStyle(connect).top) < maximumTop) {
    connect.style.visibility = "hidden";
  } else {
    connect.style.visibility = "";
  }
}
maxTop();
const option = document.querySelector(".wrapOption");

//lets copy current inner into a storage
const option_div = option.firstElementChild;
const changedOpt = document.createElement("i");
changedOpt.classList.add("fa");
changedOpt.classList.add("fa-angle-down");
changedOpt.style.cursor = "pointer";
changedOpt.classList.add("visible");

class subPages {
  constructor(page1, page2, arrows, radio, allRadio, current_aboutMe_page) {
    this.page1 = page1;
    this.page2 = page2;
    this.arrows = arrows;
    this.radio = radio;
    this.allRadio = allRadio;
    this.current_aboutMe_page = current_aboutMe_page;
  }
  inversePage() {
    if (this.current_aboutMe_page === this.page1) {
      return [this.page2, 1];
    } else {
      return [this.page1, 0];
    }
  }
  showPage(obj) {
    obj.style.width = "";
    obj.style.overflow = "";
  }
  hidePage(obj) {
    obj.style.width = 0;
    obj.style.overflow = "hidden";
  }
  executePageCalc() {
    //using inverse page find inverse of current page
    const [inverse, arrowNumber] = this.inversePage();
    //hide inverse
    this.hidePage(inverse);
    //show current
    this.showPage(this.current_aboutMe_page);
    //show arrows
    this.arrows[arrowNumber].style.opacity = 1;
    this.arrows[(arrowNumber + 1) % 2].style.opacity = 0;
    //show radios
    this.radio.style.opacity = 1;

    //handle radios

    if (!this.allRadio[(arrowNumber + 1) % 2].checked) {
      this.allRadio[(arrowNumber + 1) % 2].checked = true;
      console.log(this.allRadio[(arrowNumber + 1) % 2].checked);
    }
    if (this.allRadio[arrowNumber].checked)
      this.allRadio[arrowNumber].checked = true;
  }
  switchToDoubleScreenLayout() {
    const [inverse, arrowNumber] = this.inversePage();
    this.showPage(inverse);
    this.showPage(this.current_aboutMe_page);
    //clear arrow show
    for (let arrow of this.arrows) arrow.style.opacity = 0;
    //clear radio show
    this.radio.style.opacity = 0;
  }

  enableInteractivity() {
    var self = this;
    function updateCurrPage() {
      const [updated, arrowNumber] = self.inversePage();
      self.current_aboutMe_page = updated;
      self.executePageCalc();
    }
    this.arrows[0].addEventListener("click", updateCurrPage);
    this.arrows[1].addEventListener("click", updateCurrPage);
    this.allRadio[0].addEventListener("click", () => {
      if (self.current_aboutMe_page !== self.page1) {
        updateCurrPage();
      }
    });
    this.allRadio[1].addEventListener("click", () => {
      if (self.current_aboutMe_page !== self.page2) {
        updateCurrPage();
      }
    });
  }
}

//aboutme page
const aboutMePage = document.querySelector(".aboutMeTxt");
//image page
const myImagePage = document.querySelector(".myImage");

//arrows on the about me page
const arrows = [
  document.querySelector(".direction0"),
  document.querySelector(".direction1"),
];

//radio container about me page
const radio = document.querySelector(".pageRadio");
//all radios in about me page, (2)
const allRadio = document.querySelectorAll(".selectedPage");
//set current page to aboutme page for small screens
let current_aboutMe_page = aboutMePage;
//get inverse page for about me page, maybe revamp the code?
const AboutMe = new subPages(
  aboutMePage,
  myImagePage,
  arrows,
  radio,
  allRadio,
  current_aboutMe_page
);

//skills page
const myGraph = document.querySelector(".myGraph");
//image page
const skillsTxt = document.querySelector(".skillsTxt");

//arrows on the about me page
const arrows2 = [
  document.querySelector(".direction2"),
  document.querySelector(".direction3"),
];

//radio container about me page
const radio2 = document.querySelector(".pageRadio2");
//all radios in about me page, (2)
const allRadio2 = document.querySelectorAll(".selectedPage2");
//set current page to aboutme page for small screens
let current_skill_page = skillsTxt;

//get inverse page for about me page, maybe revamp the code?
const Skill = new subPages(
  myGraph,
  skillsTxt,
  arrows2,
  radio2,
  allRadio2,
  current_skill_page
);

//contact page
const Map = document.querySelector(".map");
//image page
const contactform = document.querySelector(".contactMeTxt");

//arrows on the about me page
const arrows3 = [
  document.querySelector(".direction5"),
  document.querySelector(".direction6"),
];

//radio container about me page
const radio3 = document.querySelector(".pageRadio3");
//all radios in about me page, (2)
const allRadio3 = document.querySelectorAll(".selectedPage3");
//set current page to aboutme page for small screens
let current_contact_page = contactform;

//get inverse page for about me page, maybe revamp the code?

const Contact = new subPages(
  Map,
  contactform,
  arrows3,
  radio3,
  allRadio3,
  current_contact_page
);

let prev = undefined;
let toggle = true;

let smallScreenSize = 825;
let aboutMeSize = 780;

function onClick() {
  console.log("toggled");
  document.querySelector(".optionBar").classList.toggle("show");
  if (toggle) {
    gsap.to(changedOpt, { rotate: 180 });
    toggle = !toggle;
  } else {
    gsap.to(changedOpt, { rotate: 360 });
    toggle = !toggle;
  }
}
changedOpt.addEventListener("click", onClick);
function calculateMenuBar() {
  const replace = document.createElement("div");

  replace.appendChild(
    window.innerWidth < smallScreenSize ? changedOpt : option_div
  );
  if (window.innerWidth < smallScreenSize) {
    replace.classList.add("icon");
  }

  if (window.innerWidth >= smallScreenSize) {
    document.querySelector(".optionBar ").classList.remove("show");
    if (!toggle) {
      gsap.to(changedOpt, { rotate: 360 });
      toggle = !toggle;
    }
  }

  option.innerHTML = "";
  option.append(replace);
  gsap.from(replace, { duration: 0.5, opacity: 0 });

  prev = window.innerWidth;
}
function checkScreenSize() {
  maxTop();
  resizePanels();
  skillCanvas.width = parseFloat(window.innerWidth);
  skillCanvas.height = parseFloat(window.innerHeight);
  itemsOrig = initArray();
  if (
    (prev < smallScreenSize && window.innerWidth >= smallScreenSize) ||
    (prev >= smallScreenSize && window.innerWidth < smallScreenSize)
  ) {
    const tl = gsap.timeline();
    tl.to(option.firstElementChild, {
      duration: 0.5,
      x: -100,
      opacity: 0,
      onComplete: calculateMenuBar,
    });
  }
  if (!prev) {
    calculateMenuBar();
  }

  //if small screen, call the function that handles small screen resize, else do it here
  if (window.innerWidth < aboutMeSize) {
    AboutMe.executePageCalc();
    Skill.executePageCalc();
    Contact.executePageCalc();
  } else {
    Skill.switchToDoubleScreenLayout();
    AboutMe.switchToDoubleScreenLayout();
    Contact.switchToDoubleScreenLayout();
  }
}
//update page used when radio is clicked or the buttons are
AboutMe.enableInteractivity();
Skill.enableInteractivity();
Contact.enableInteractivity();
checkScreenSize();
window.addEventListener("resize", checkScreenSize);
