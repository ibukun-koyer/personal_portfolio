gsap.registerPlugin(ScrollTrigger);
//set index values
gsap.utils.toArray(".panel").forEach((panel, i) => {
  panel.style.zIndex = i;
});

//get all options html
const classa = ".nav1";
const classb = ".nav2";
const classc = ".nav3";
const classd = ".nav4";
const classe = ".home";
const optionLinkOne = {
  html: document.querySelector(classa).innerHTML,
  class: classa,
};
const optionLinkTwo = {
  html: document.querySelector(classb).innerHTML,
  class: classb,
};
const optionLinkThree = {
  html: document.querySelector(classc).innerHTML,
  class: classc,
};
const optionLinkFour = {
  html: document.querySelector(classd).innerHTML,
  class: classd,
};
const optionLinkFive = {
  html: optionLinkOne.html.replace(/>[A-Za-z0-9 ]+</, ">Home<"),
  class: classe,
};

const divideAnimationTime = 1.5;
const animateOption = (outClass, inHtml, y) => {
  const first = document.querySelectorAll(outClass);
  const tl = gsap.timeline({
    onComplete: () => {
      for (let i of first) i.innerHTML = inHtml;
      gsap.to(outClass, {
        duration: 0.5 / divideAnimationTime,
        textDecoration: "none",
      });
      gsap.to(outClass, {
        duration: 0.5 / divideAnimationTime,
        y: 0,
        opacity: 1,
      });
    },
  });
  tl.to(outClass, {
    duration: 0.5 / divideAnimationTime,
    textDecoration: "line-through",
  });
  tl.to(outClass, { duration: 0.5 / divideAnimationTime, y, opacity: 0 });
};
gsap.from(".homeText", {
  duration: 1 / divideAnimationTime,
  opacity: 0,
  x: 200,
  scrollTrigger: {
    trigger: ".bkg",
    start: "top bottom",
    toggleActions: "restart pause restart pause",
  },
});

const tl_connect = gsap.timeline({
  scrollTrigger: {
    trigger: ".bkg",
    start: "center top",

    onEnter: () => {
      document.querySelector(".connect").style.right = "0";
      document.querySelectorAll(".connect i").forEach((i) => {
        i.style.color = "var(--bkg)";
      });
    },

    onLeave: () => {
      document.querySelector(".connect").style.right = "0";
      document.querySelectorAll(".connect i").forEach((i) => {
        i.style.color = "var(--bkg)";
      });
    },
    onLeaveBack: () => {
      document.querySelector(".connect").style.right =
        "calc(100% - var(--connect-width))";
      document.querySelectorAll(".connect i").forEach((i) => {
        i.style.color = "";
      });
    },
  },
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutme",
    start: "top bottom",
    toggleActions: "restart pause restart pause",
    onEnter: () => {
      animateOption(classa, optionLinkFive.html, 50);
    },
    onEnterBack: () => {
      animateOption(classb, optionLinkTwo.html, -50);
    },
    onLeave: () => {
      animateOption(classb, optionLinkOne.html, 50);
    },
    onLeaveBack: () => {
      animateOption(classa, optionLinkOne.html, -50);
    },
  },
});
tl.from(".aboutMeTxt", {
  duration: 0.5 / divideAnimationTime,
  y: -500,
  opacity: 0,
  ease: "easeIn",
})
  .from(
    ".myImage",
    { duration: 0.5 / divideAnimationTime, y: 500, opacity: 0, ease: "easeIn" },
    0.5 / divideAnimationTime
  )
  .from(
    ".bkgText",
    {
      duration: 0.5 / divideAnimationTime,
      y: -100,
      opacity: 0,
      ease: "easeIn",
    },
    0.5 / divideAnimationTime
  )
  .from(
    ".aboutMeArticle>h2",
    { duration: 0.5 / divideAnimationTime, x: 200, opacity: 0, ease: "easeIn" },
    0.75 / divideAnimationTime
  )
  .from(
    ".aboutMeArticle>p",
    { x: 200, opacity: 0, stagger: 0.25 },
    1 / divideAnimationTime
  )
  .from(".resumeDownload", {
    duration: 0.1 / divideAnimationTime,
    y: 100,
    opacity: 0,
    ease: "easeIn",
  });

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top bottom",
    toggleActions: "restart pause restart pause",
  },
});
tl2
  .from(".containSkills", {
    duration: 1 / divideAnimationTime,
    x: -100,
    opacity: 0,
    ease: "easeIn",
  })
  .from(
    ".myGraph",
    {
      duration: 0.5 / divideAnimationTime,
      y: -500,
      opacity: 0,
      ease: "easeIn",
    },
    0.5 / divideAnimationTime
  )
  .from(
    ".skillsBkgTxt",
    {
      duration: 0.5 / divideAnimationTime,
      y: +100,
      opacity: 0,
      ease: "easeIn",
    },
    0.5 / divideAnimationTime
  )
  .from(
    ".skillsArticle>h2",
    { duration: 0.5 / divideAnimationTime, x: 200, opacity: 0, ease: "easeIn" },
    0.75
  )
  .from(
    ".skillsArticle>p",
    { x: 200, opacity: 0, stagger: 0.25 },
    1 / divideAnimationTime
  )
  .from(".skill-item", { y: -50, opacity: 0, stagger: 0.05 })
  .from(".githubLink", {
    duration: 0.1 / divideAnimationTime,
    y: 100,
    opacity: 0,
    ease: "easeIn",
  })
  .from(
    ".graphLanguages",
    { y: -100, opacity: 0, stagger: 0.1 },
    1 / divideAnimationTime
  )
  .from(
    ".experience",
    { x: 100, opacity: 0, stagger: 0.1 },
    1.5 / divideAnimationTime
  )
  .from(".fullBar", { opacity: 0, stagger: 0.1 }, 0 / divideAnimationTime);

gsap.from(".projectPageTitle", {
  duration: 1 / divideAnimationTime,
  x: 500,
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    toggleActions: "restart pause restart pause",
    onEnterBack: () => {},
    onLeave: () => {},
    onLeaveBack: () => {
      animateOption(classc, optionLinkThree.html, -50);
    },
    onEnter: () => {
      animateOption(classc, optionLinkTwo.html, 50);
    },
  },
});

gsap.from(".containContactMe", {
  opacity: 0,
  x: 500,
  duration: 1 / divideAnimationTime,
  scrollTrigger: {
    start: "bottom 80%",
    trigger: ".projects",
    toggleActions: "restart  pause pause restart",
    onEnter: () => {
      animateOption(classd, optionLinkThree.html, 50);
    },
    onLeaveBack: () => {
      gsap.from(".projectPageTitle", {
        duration: 2 / divideAnimationTime,
        x: 500,
      });
      animateOption(classd, optionLinkFour.html, -50);
    },
  },
});
let currentSnapObj;
function createSnapping() {
  let snap = ScrollTrigger.create({
    snap: 1 / (gsap.utils.toArray(".panel").length - 1),
  });
  return snap;
}

const shouldSnap = () => {
  if (window.outerHeight < screen.height) {
    currentSnapObj.disable();
    killed = true;
  } else {
    if (killed) {
      currentSnapObj.enable();
      gsap.to(window, { scrollTo: "#home" });
      killed = false;
    }
  }
};

currentSnapObj = createSnapping();
let killed = false;
shouldSnap();

window.addEventListener("resize", shouldSnap);
