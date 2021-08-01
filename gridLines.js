const gridLines = document.querySelector(".gridLines");

const gridLineCtx = gridLines.getContext("2d");

function getCssVariable(str) {
  return parseFloat(
    window.getComputedStyle(document.body).getPropertyValue(`--${str}`)
  );
}
function sizeGrid() {
  let initialWidth = getCssVariable("mainSecWidth");
  let initialHeight = getCssVariable("mainSecHeight");

  gridLines.width = initialWidth;
  gridLines.height = initialHeight;

  drawGridLines();
}

function drawBasedOnAxis(axis, inc, color) {
  gridLineCtx.strokeStyle = color;
  let lineNumber = 1;
  for (
    let i = inc;
    i < (axis === "x" ? gridLines.height : gridLines.width);
    i += inc, lineNumber++
  ) {
    gridLineCtx.beginPath();

    if (lineNumber % 5 === 0) {
      gridLineCtx.lineWidth = 2;
    } else {
      gridLineCtx.lineWidth = 0.5;
    }

    if (axis === "y") {
      gridLineCtx.moveTo(i, 0);
      gridLineCtx.lineTo(i, gridLines.height);
    } else if (axis === "X") {
      gridLineCtx.moveTo(0, i);
      gridLineCtx.lineTo(gridLines.width, i);
    }
    gridLineCtx.stroke();
  }
}

function drawGridLines() {
  let inc = 10;
  let lineColor = " rgba(74, 74, 74, 0.04)";
  drawBasedOnAxis("X", inc, lineColor);
  drawBasedOnAxis("y", inc, lineColor);
}
sizeGrid();
drawGridLines();
