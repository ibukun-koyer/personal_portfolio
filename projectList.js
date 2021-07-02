const carouselContainer = document.querySelector(".carousel");

const overviewPage = document.querySelector(".overview");

//let's implement
let stateList = [
  { class: "earlyStage", text: "In early stages" },
  { class: "inDevelopment", text: "In Development" },
  { class: "completed", text: "Completed" },
];

function progress(state) {
  const stateReport = document.createElement("div");
  stateReport.classList.add(stateList[state].class);
  stateReport.classList.add("reportMargin");
  stateReport.innerHTML = `<i class="fa fa-circle" style="font-size:0.8rem;" aria-hidden="true"></i> ${stateList[state].text}`;
  return stateReport;
}

function onClick(clickCallback) {
  overviewPage.innerHTML = clickCallback();
}
function createDisplayIcon(type, data) {
  const imgDiv = document.createElement("div");
  //where 0 means bkg image
  if (type === 0) {
    imgDiv.style.height = "100%";
    imgDiv.style.width = "100%";
    imgDiv.style.backgroundSize = "cover";
    imgDiv.style.backgroundPosition = "center";
    imgDiv.style.backgroundImage = `url(${data})`;
  }
  //where 1 means innerHTML
  else if (type === 1) {
    imgDiv.style.width = "fit-content";
    imgDiv.style.height = "fit-content";
    imgDiv.classList.add("centered");
    imgDiv.innerHTML = data;
  }
  return imgDiv;
}
let startId = 0;
let idName = "project";

//links:
// -> rock paper scissors: https://rock-paper-scissors-9da14.web.app/
//->netflix clone:  https://netflix-clone-8d4f9.web.app/
//instagram: https://instagram-clone-13f87.web.app/
//chess: https://chess-2d0bd.web.app/
//monopoly has been screen recorded and committed --> https://youtu.be/lnorLBd0CXQ
//whatsapp has been screen recorded and committed --> https://youtu.be/AmY5EjceX9E
//project notebook has been screen recorded and committed --> https://youtu.be/2OAYUeY2bIU
//covid vis has been screen recorded and commited --> https://youtu.be/VNkQ2EFJf58
const projects = [
  {
    pageTitle: "Project <span class='italic noBold'>Notebook</span>",
    state: 1,
    pageInfo: () => "",
    displsyIconHTML: createDisplayIcon(
      1,
      "<div class='project-notebook'>Project Notebook</div>"
    ),
    pageData: ProjectNotebook,
  },
  {
    pageTitle: "Rock, paper, scissors",
    state: 2,
    pageInfo: () => "",
    displsyIconHTML: createDisplayIcon(
      0,
      "https://static.vecteezy.com/system/resources/previews/000/690/876/original/rock-paper-scissors-vector-design.jpg"
    ),
    pageData: RockPaperScissors,
  },
  {
    pageTitle: "Whatsapp <span class='italic noBold'>Clone</span>",
    state: 1,
    pageInfo: () => "",
    displsyIconHTML: createDisplayIcon(
      0,
      "./images/alexander-shatov-_qsuER9xYOY-unsplash.jpg"
    ),
    pageData: Whatsapp,
  },
  {
    pageTitle: "Monopoly <span class='italic noBold'>Emulator</span>",
    state: 2,
    pageInfo: () => "",
    displsyIconHTML: createDisplayIcon(
      0,
      "./images/joshua-hoehne-Ey7i2tHVV5E-unsplash.jpg"
    ),
    pageData: Monopoly,
  },
  {
    pageTitle: "Netflix <span class='italic noBold'>Clone</span>",
    state: 2,
    pageInfo: () => "",
    displsyIconHTML: createDisplayIcon(
      0,
      "./images/charles-deluvio-jtmwD4i4v1U-unsplash.jpg"
    ),
    pageData: Netflix,
  },
  {
    pageTitle: "Instagram <span class='italic noBold'>Login page</span>",
    state: 2,
    pageInfo: () => "",
    displsyIconHTML: createDisplayIcon(
      0,
      "./images/alexander-shatov-71Qk8ODIBko-unsplash.jpg"
    ),
    pageData: Instagram,
  },

  {
    pageTitle: "Covid <div class='italic noBold'>Vis - Cali</div>",
    state: 2,
    pageInfo: () => "",
    displsyIconHTML: createDisplayIcon(0, "./images/covid.png"),
    pageData: Covid,
  },
  {
    pageTitle: "Chess <div class='italic noBold'>Clone</div>",
    state: 2,
    pageInfo: () => "",
    displsyIconHTML: createDisplayIcon(
      0,
      "./images/rahul-pabolu-T1fvJX0TmLM-unsplash.jpg"
    ),
    pageData: Chess,
  },
];

const listOfProjects = [];

let show = false;
function toggleShow() {
  document.body.classList.toggle("hideOverflow");
  document.querySelector(".wrapOption").classList.toggle("hideNavBar");

  if (show === false) document.querySelector(".overview").style.width = "100%";
  gsap.to(".linearIn", {
    left: show === false ? "0" : "100%",
    // stagger: 0.2,
    stagger: {
      each: 0.2,
      from: show === false ? "start" : "end",
    },
    onComplete: () => {
      document.querySelector(".mainScreen").style.overflow =
        show === false ? "auto" : "hidden";

      if (show === true) document.querySelector(".overview").style.width = "0";
      show = !show;
    },
  });
}
//create a function that creates an header and a paragraph;
function createSection(header, p) {
  const sectionHeader = document.createElement("h2");
  sectionHeader.innerText = header;
  sectionHeader.classList.add("docSubHeader");
  const paragraph = document.createElement("p");
  if (typeof p === "string") paragraph.innerHTML = p;
  else paragraph.append(p);
  return [sectionHeader, paragraph];
}
//lets give the back button in overview page an event listener
document.querySelector(".back").addEventListener("click", toggleShow);
function showOverviewPage({
  projectName,
  creatorsName,
  date,
  listOfLanguages,
  aboutProjParagraph,
  demoParagraph,
  urlForLinkOrVideo,
  screenshot,
  projectRepo,
  additionalGitText,
  howToInstall,
}) {
  toggleShow();
  const doc = document.querySelector(".container");
  doc.innerHTML = "";
  //sections breaksdown

  //header
  const header = document.createElement("h1");
  //------------------------------------------------------------------->page title needed
  header.innerHTML = projectName;
  header.classList.add("projDesHeader");
  doc.append(header);
  //creation date and username
  const docInfo = document.createElement("div");
  //------------------------------------------------------------------->creators name
  //------------------------------------------------------------------->date of creation
  docInfo.innerHTML = `by <span class="username">${creatorsName}</span> ${date}`;
  docInfo.classList.add("docInfo");
  doc.append(docInfo);
  //languages useed section
  const languagesUsed = document.createElement("div");
  languagesUsed.classList.add("langBorder");
  //------------------------------------------------------------------->list of languages used for project
  let listOfLang = listOfLanguages;
  for (let i = 0; i < listOfLang.length; i++) {
    const aLang = document.createElement("span");
    aLang.classList.add("aLang");
    aLang.innerHTML = listOfLang[i];
    languagesUsed.append(aLang);
  }
  doc.append(languagesUsed);
  //about the project
  //------------------------------------------------------------------->about project paragraph
  const [aboutProjHeader, aboutProj] = createSection(
    "About project",
    aboutProjParagraph
  );
  doc.append(aboutProjHeader, aboutProj);
  //about the demo and demo link/video
  //------------------------------------------------------------------->demo paragraph
  const [demoHeader, demo] = createSection("Demo", demoParagraph);

  //------------------------------------------------------------------->url for link or video
  //------------------------------------------------------------------->screenshot if link is used

  let url = urlForLinkOrVideo;
  let image = screenshot;

  const wrapDemo = document.createElement("div");
  wrapDemo.classList.add("centerDemo");
  let maxWidth = 720;
  //resize function for iframe
  function resize_iframe(obj, unit, ratio) {
    let temp = parseFloat(window.getComputedStyle(doc).width);

    if (temp > maxWidth) {
      temp = maxWidth;
      if (unit == "") obj.width = maxWidth;
      else obj.style.width = maxWidth + unit;
    } else {
      if (unit == "") obj.width = temp;
      else obj.style.width = temp + unit;
    }

    if (!unit) obj.height = temp * ratio;
    else obj.style.height = temp * ratio + unit;
  }
  if (url.indexOf("https://www.youtube.com/embed") !== -1) {
    const createDemo = document.createElement("iframe");
    createDemo.classList.add("designIframe");

    createDemo.allowFullscreen = true;
    createDemo.style.margin = "auto";
    resize_iframe(createDemo, "", 9 / 16);
    window.addEventListener("resize", () => {
      resize_iframe(createDemo, "", 9 / 16);
    });
    createDemo.style.objectFit = "contain";
    createDemo.src = url;
    //append
    wrapDemo.append(createDemo);
  } else {
    //anchor tag for redirection
    const sizeRatio = 12 / 16;
    const card = document.createElement("div");
    resize_iframe(card, "px", sizeRatio);
    window.addEventListener("resize", () => {
      resize_iframe(card, "px", sizeRatio);
    });
    //add items into the sec
    const cardHeader = document.createElement("h3");
    cardHeader.classList.add("cardHeader");
    cardHeader.innerText = "Try it yourself";
    card.append(cardHeader);
    //the ref
    const create_link = document.createElement("a");
    create_link.href = url;
    create_link.target = "_blank";
    create_link.classList.add("anchor");

    card.append(create_link);

    //image screenshot
    const create_poster = document.createElement("img");
    create_poster.classList.add("poster");
    create_poster.src = image;
    create_poster.alt = "demo screenshot";
    create_link.append(create_poster);

    card.classList.add("cardForDemo");
    wrapDemo.append(card);
  }
  doc.append(demoHeader, demo, wrapDemo);
  //github link
  //------------------------------------------------------------------->github repoitory for project
  //------------------------------------------------------------------->additional text to the current
  const github = document.createElement("p");
  github.innerHTML =
    `To access the source code for this project, visit the <a href="${projectRepo}" target="_blank" class="git">Github repository</a>. ` +
    additionalGitText;
  doc.append(github);
  //how to install
  //------------------------------------------------------------------->paragraph on how to install or run the project
  const [installHeader, install] = createSection("How to run", howToInstall);
  install.style.marginBottom = "5rem";

  doc.append(installHeader, install);
}

function calculateBigScreen(projects) {
  //create container x
  const newDiv = document.createElement("div");
  newDiv.classList.add("carousel-item");

  //create a text section
  const textSection = document.createElement("div");
  textSection.classList.add("textSection");

  //create an image section
  const imageSection = document.createElement("div");
  imageSection.classList.add("imageSection");
  imageSection.classList.add("animate");
  imageSection.innerHTML = "";
  imageSection.append(projects.displsyIconHTML);

  //create a h1 section
  const header = document.createElement("h1");
  header.classList.add("projectH1");
  header.innerHTML = projects.pageTitle;

  //state report
  const report = progress(projects.state);

  //create a button
  const button = document.createElement("button");
  button.classList.add("projectBtn");
  button.innerText = "More Info...";

  button.addEventListener("click", () => {
    showOverviewPage(projects.pageData);
  });

  textSection.append(header, report, button);

  newDiv.append(textSection, imageSection);

  newDiv.setAttribute("id", `${idName}${startId}`);

  return newDiv;
}

projects.forEach((i) => {
  const bigScreen = calculateBigScreen(i);

  listOfProjects.push(bigScreen);

  carouselContainer.append(bigScreen);
  //pixel calculation
  if (startId === 0) {
    let containerHeight = parseFloat(
      window.getComputedStyle(carouselContainer).height
    );
    // let itemHeight = parseFloat(window.getComputedStyle(bigScreen).height);
    let itemHeight =
      (getCssVariable("mainSecHeight") * getCssVariable("carouselHeight")) /
      100;
    let itemOffset = parseFloat(bigScreen.offsetTop);

    //hence the available space in container will be?

    let availableSpace = containerHeight - (itemHeight + itemOffset);

    carouselContainer.style.gridTemplateRows = `repeat(${
      projects.length - 1
    }, ${availableSpace / (projects.length - 1)}px) ${
      containerHeight - availableSpace * 2
    }px repeat(${projects.length - 1}, ${
      availableSpace / (projects.length - 1)
    }px)`;
    bigScreen.style.gridArea = `${startId + 1} / 1 / span ${
      projects.length
    } / span 1`;
    bigScreen.classList.add(`selectedProjectOutline`);
  } else {
    bigScreen.classList.add("invisible");
  }

  startId++;
});

let currentProject = 0;
let animationDuration = 0.5;
const prevArrow = document.querySelector(".up");
const nextArrow = document.querySelector(".down");
const leftArrow = document.querySelector(".left-opt");
const rightArrow = document.querySelector(".right-opt");
let numberOfNumbers = 3;

let nextStart = 0;
const allCountObject = [];
function initializeViewer() {
  function wrapCondition(callbacka, callbackb, str1, str2, arrow) {
    if (
      arrow.className?.indexOf(str1) !== -1 &&
      arrow.className?.indexOf("disable") === -1
    ) {
      callbacka();
    } else if (
      arrow.className?.indexOf(str2) !== -1 &&
      arrow.className?.indexOf("disable") === -1
    ) {
      callbackb();
    }
  }
  function performUpdates() {
    initializeArrows();
    updateCheckArrow();
  }
  function enable_disable(arg1, arg2, arrowa, arrowb) {
    if (arg1) {
      arrowa.classList.add("disable");
      arrowa.classList.remove("enable");
    } else {
      arrowa.classList.remove("disable");
      arrowa.classList.add("enable");
    }
    if (arg2) {
      arrowb.classList.add("disable");
      arrowb.classList.remove("enable");
    } else {
      arrowb.classList.remove("disable");
      arrowb.classList.add("enable");
    }
  }
  function updateCheckArrow() {
    enable_disable(
      currentProject === 0,
      currentProject === projects.length - 1,
      leftArrow,
      rightArrow
    );
  }
  function initializeCount() {
    let temp = nextStart;
    let totalJmp = projects.length;
    for (let i = nextStart; i < totalJmp; i++) {
      const button = document.createElement("button");
      button.classList.add("check");
      button.innerHTML = i + 1;
      allCountObject.push(button);

      rightArrow.insertAdjacentElement("beforebegin", button);
      if (temp === i) {
        button.classList.add("selectedProject");
      }
      if (nextStart < numberOfNumbers) {
        nextStart++;
      } else {
        button.style.display = "none";
      }
      button.addEventListener("click", () => {
        let value = i;
        let difference = Math.abs(currentProject - value);

        let temp = currentProject;
        for (let i = 0; i < difference; i++) {
          if (value > temp) {
            animateDown();
          } else if (value < temp) {
            animateUp();
          }
        }
      });
    }
    updateCheckArrow();
  }

  function initializeArrows() {
    enable_disable(
      currentProject === 0,
      currentProject === projects.length - 1,
      prevArrow,
      nextArrow
    );
  }
  function editPrevious(filter) {
    if (listOfProjects[currentProject - 1]) {
      gsap.to(listOfProjects[currentProject - 1], {
        duration: animationDuration,
        filter,
        ease: "ease-in",
      });

      document
        .querySelector(
          `#${listOfProjects[currentProject - 1].getAttribute(
            "id"
          )} .imageSection`
        )
        .classList.toggle("animate");
    }
  }
  initializeArrows();
  initializeCount();
  function horizontalAnimation(
    startRemovingFrom,
    endRemovingAt,
    startAddingFrom,
    endAddingAt
  ) {
    for (let i = startRemovingFrom; i < endRemovingAt; i++) {
      allCountObject[i].style.display = "none";
    }
    for (let i = startAddingFrom; i < endAddingAt; i++) {
      allCountObject[i].style.display = "";
    }
  }
  function animateDown() {
    //horizontal animation
    if ((currentProject + 1) % nextStart === 0) {
      let startRemovingFrom = currentProject - (numberOfNumbers - 1);
      let endRemovingAt = currentProject + 1;
      let startAddingFrom = nextStart;
      let endAddingAt =
        allCountObject.length > nextStart + numberOfNumbers
          ? nextStart + numberOfNumbers
          : allCountObject.length;
      nextStart = endAddingAt;

      horizontalAnimation(
        startRemovingFrom,
        endRemovingAt,
        startAddingFrom,
        endAddingAt
      );
    }
    listOfProjects[currentProject].classList.remove("selectedProjectOutline");
    allCountObject[currentProject].classList.remove("selectedProject");
    currentProject++;
    allCountObject[currentProject].classList.add("selectedProject");
    listOfProjects[currentProject].classList.add("selectedProjectOutline");
    //vertical animation
    gsap.set(listOfProjects[currentProject], {
      gridArea: `${currentProject + 1} / 1 / span ${projects.length} / span 1`,
      opacity: 1,
    });
    gsap.from(listOfProjects[currentProject], {
      duration: animationDuration,
      y: 400,
      opacity: 0,
      ease: "ease-in",
    });
    editPrevious("grayscale(0.5) blur(1px)");
    listOfProjects[currentProject].classList.remove("invisible");
    performUpdates();
  }
  function animateUp() {
    //horizontal animation
    if (currentProject % numberOfNumbers === 0) {
      let startRemovingFrom = currentProject;
      let endRemovingAt =
        currentProject + numberOfNumbers > allCountObject.length
          ? allCountObject.length
          : currentProject + numberOfNumbers;
      let startAddingFrom =
        currentProject - numberOfNumbers <= 0
          ? 0
          : currentProject - numberOfNumbers;
      let endAddingAt = currentProject;
      console.log(
        startRemovingFrom,
        endRemovingAt,
        startAddingFrom,
        endAddingAt,
        currentProject + numberOfNumbers > allCountObject.length
      );
      nextStart = endAddingAt;

      horizontalAnimation(
        startRemovingFrom,
        endRemovingAt,
        startAddingFrom,
        endAddingAt
      );
    }

    editPrevious("");
    listOfProjects[currentProject].classList.remove("selectedProjectOutline");
    allCountObject[currentProject].classList.remove("selectedProject");
    let temp = currentProject;
    currentProject--;
    allCountObject[currentProject].classList.add("selectedProject");
    listOfProjects[currentProject].classList.add("selectedProjectOutline");
    gsap.to(listOfProjects[temp], {
      duration: animationDuration,
      y: 400,
      opacity: 0,
      ease: "ease-out",
      onComplete: () => {
        gsap.set(listOfProjects[temp], {
          gridArea: ``,
          opacity: 0,
          transform: "none",
        });
      },
    });
    listOfProjects[temp].classList.add("invisible");
    performUpdates();
  }

  function handleChanges(arrow) {
    wrapCondition(animateDown, animateUp, "down", "up", arrow);
  }
  function handleCheckArrows(arrow) {
    wrapCondition(
      () => {
        animateUp();
      },
      () => {
        animateDown();
      },
      "left-opt",
      "right-opt",
      arrow
    );
  }
  //event listeners for objects in this function
  leftArrow.addEventListener("click", () => {
    handleCheckArrows(leftArrow);
  });
  rightArrow.addEventListener("click", () => {
    handleCheckArrows(rightArrow);
  });
  nextArrow.addEventListener("click", () => {
    handleChanges(nextArrow);
  });
  prevArrow.addEventListener("click", () => {
    handleChanges(prevArrow);
  });
}

initializeViewer();
