const pos = [80, 60, 90, 85, 90, 80, 70, 50, 50, 65]; //over 100%
const allBars = document.querySelectorAll(".barStart");

const color1 = getComputedStyle(document.body).getPropertyValue("--stage1");
const color2 = getComputedStyle(document.body).getPropertyValue("--stage2");
const color3 = getComputedStyle(document.body).getPropertyValue("--stage3");
const color4 = getComputedStyle(document.body).getPropertyValue("--stage4");
const color5 = getComputedStyle(document.body).getPropertyValue("--stage5");
const color6 = getComputedStyle(document.body).getPropertyValue("--stage6");

const keypoints = {
  0: color1.slice(2),
  50: color2.slice(2),
  100: color3.slice(2),
  150: color4.slice(2),
  200: color5.slice(2),
  250: color6.slice(2),
};

function calculateDiff(lower, upper, mix) {
  return Math.floor(lower + (upper - lower) * mix);
}
function setUpBars(bar, width) {
  let actualWidth = (width / 100) * 250; //convert the width to the total width. total width is 250%;
  bar.style.width = `${actualWidth}%`;
  //given the actual width, lets use the stages presented in the css.
  //->if between 0 and 50, calculate color using stage1 and stage2, and so on.

  //   lets get the lower and upper boundary for the width
  let inc = 50;
  let lowerBoundary = Math.floor(actualWidth / 50) * 50;
  let upperBoundary = Math.ceil(actualWidth / 50) * 50;
  if (upperBoundary === lowerBoundary) {
    upperBoundary += inc;
  }
  //given boundary, lets calculate the color of the bar
  let lowerBoundaryArr = [];
  let upperBoundaryArr = [];
  for (let i = 0; i < 6; i += 2) {
    lowerBoundaryArr.push(
      parseInt(keypoints[`${lowerBoundary}`].slice(i, i + 2), 16)
    );
    upperBoundaryArr.push(
      parseInt(keypoints[`${upperBoundary}`].slice(i, i + 2), 16)
    );
  }
  //next, lets figure out the mix btw the lowerboundary and the width we speciied
  let mix = (actualWidth - lowerBoundary) / inc;

  //lets now set the color

  bar.style.backgroundColor = `rgb(${calculateDiff(
    lowerBoundaryArr[0],
    upperBoundaryArr[0],
    mix
  )}, ${calculateDiff(
    lowerBoundaryArr[1],
    upperBoundaryArr[1],
    mix
  )}, ${calculateDiff(lowerBoundaryArr[2], upperBoundaryArr[2], mix)})`;
}

for (let i = 0; i < pos.length; i++) {
  setUpBars(allBars[i], pos[i]);
}
