//we already have skillsCanvas variable defined in handle resize, lets access that to create the context
//get skills canvas
const skillCanvas = document.querySelector(".skillsCanvas");
let ctx = skillCanvas.getContext("2d");

function randowBegin(max, min = 0) {
  let random = Math.floor(Math.random() * max);
  return random <= min ? min : random;
}

let speed = 1;
function item(text) {
  return {
    text,
    x: randowBegin(skillCanvas.width),
    y: randowBegin(skillCanvas.height),
    fontSize: randowBegin(10, 4),
    xInc: randowBegin(2) === 0 ? speed * -1 : speed,
    yInc: randowBegin(2) === 0 ? speed * -1 : speed,
  };
}

let alpha = 0.1;
let fillColor = `rgba(72, 72, 72, ${alpha})`;
function initArray() {
  return [
    item("HTML"),
    item("CSS"),
    item("C"),
    item("Python"),
    item("Firebase"),
    item("React"),
    item("C++"),
    item("Node.js"),
    item("MongoDB"),
  ];
}
let itemsOrig = initArray();

function drawText() {
  ctx.clearRect(0, 0, skillCanvas.width, skillCanvas.height);
  ctx.fillStyle = fillColor;
  for (let i of itemsOrig) {
    ctx.font = `${i.fontSize}rem Great Vibes`;
    let radius = (i.fontSize * 16 * i.text.length) / 2;

    if (i.x + radius >= skillCanvas.width) {
      i.xInc *= -1;
    }
    if (i.x <= 0) {
      i.xInc = Math.abs(i.xInc);
    }
    if (i.y <= radius / 2) {
      i.yInc = Math.abs(i.yInc);
    }
    if (i.y + i.fontSize >= skillCanvas.height) {
      i.yInc *= -1;
    }
    ctx.fillText(i.text, i.x, i.y);
    i.x += i.xInc;
    i.y += i.yInc;
  }

  requestAnimationFrame(drawText);
}
skillCanvas.addEventListener("click", () => {
  fillColor = `rgba(${randowBegin(256)}, ${randowBegin(256)}, ${randowBegin(
    256
  )}, ${alpha})`;
});
drawText();
