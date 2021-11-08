let parsed_time_test = undefined;
const image = {
  sunrise: {
    start: 5,
    end: 7,
    image_class: "sunrise",
    nameBkg: "#588157",
    iconColor: "#e9f5db",
    tag: "#283618",
  },
  day: {
    start: 7,
    end: 18,
    image_class: "day",
    nameBkg: "#23c9ff",
    iconColor: "#e2fdff",
    tag: "#e2fdff",
  },
  sunset: {
    start: 18,
    end: 20,
    image_class: "sunset",
    nameBkg: "#f25c54",
    iconColor: "#cbf3f0",
    tag: "#f25c54",
  },
  night: {
    start: 20,
    end: 5,
    image_class: "night",
    nameBkg: "#ff9e00",
    iconColor: "#caf0f8",
    tag: "#caf0f8",
  },
};

let prevI;
function change_bkg() {
  let time = new Date();
  let curr_time = time.toLocaleTimeString();
  //convert time string to string
  let parsed_time = parseInt(curr_time);

  if (curr_time.indexOf("PM") !== -1) {
    if (parsed_time !== 12) parsed_time += 12;
  } else {
    parsed_time = parsed_time === 12 ? (parsed_time += 12) : parsed_time;
  }

  if (
    typeof parsed_time_test === "number" &&
    parsed_time_test > 0 &&
    parsed_time_test < 24
  ) {
    parsed_time = parsed_time_test;
  }
  function setDesign(i) {
    if (i !== prevI) {
      //get the bkg
      const bkg = document.querySelector(".bkg");

      //get my name
      const name = document.querySelector(".myName");
      //get spans that need coloring
      const spans = document.querySelectorAll(".colorMe");
      //get imageBkge 1
      const imageBkg1 = document.querySelector(".imageColorOne");
      //get imageBkge 2
      const imageBkg2 = document.querySelector(".imageColorTwo");
      //get graph holder bkg
      const graphHolder = document.querySelector(".graphHolder");
      //get map
      const map = document.querySelector(".containContactMe");

      map.style.border = `10px solid var(--bkg2TransparentMid)`;
      document.body.style.setProperty("--uniqueColor", image[i].nameBkg);
      bkg.setAttribute("class", "panel bkg");
      bkg.classList.add(image[i].image_class);
      name.style.backgroundColor = image[i].nameBkg;
      for (let span of spans) span.style.color = image[i].nameBkg;
      imageBkg1.style.backgroundColor = image[i].nameBkg;
      imageBkg2.style.backgroundColor = image[i].iconColor;
      graphHolder.style.backgroundColor = image[i].iconColor;
      prevI = i;
    }
  }

  if (parsed_time < 5) {
    setDesign("night");
  } else {
    for (let i in image) {
      if (
        parsed_time >= image[i].start &&
        (parsed_time < image[i].end || image[i].end === 5)
      ) {
        setDesign(i);
        break;
      }
    }
  }
}
change_bkg();
setInterval(() => {
  change_bkg();
}, 60000);
