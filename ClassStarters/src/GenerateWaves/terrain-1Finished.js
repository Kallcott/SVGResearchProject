import Color from "color";

const svg = require("@svgdotjs/svg.js");

export function drawTerrain1(svg) {
  //The height of a wave, and the Y position we start at.
  const layerHeight = 400;
  const layerWidth = window.innerWidth;

  // height of curves
  let amplitude = Math.random() * (layerHeight / 2);

  // Our plan is to have many waves, at varying heights
  // One sine wave larger than the screen. We will only see it's incline
  // Smaller sine wave for each bump

  // Frequency, the distance between peaks
  // The addition sets the minimum height
  // The multiplication sets the max height
  let freq1 = Math.random() * 0.08 * +0.06;
  // move the curve left / right
  let phase1 = Math.random() * 250; // move the curve left / right

  // We can add sine waves to create waves within our wave.
  let freq2 = Math.random() * 0.0 + 0.02;
  let phase2 = phase1 + (Math.random() + 175);

  // quality of image
  let detail = 2;

  // Set initial pen coordinate
  let coord = `M 0 ${layerHeight} `;

  // Generate points width to width
  for (currPoint = 0; currPoint <= layerWidth; currPoint += detail) {
    coord += addWave().next().value;
  }
  //complete shape for fill
  coord += `V ${layerHeight} L 0 ${layerHeight}`;

  //Add shape to path
  svg.path(coord).stroke({ color: `#000`, opacity: 0.6, width: 5 });

  // Generate the path of a wave
  function* addWave() {
    try {
      while (true) {
        console.log("Test");
        let xPos = currPoint;
        let yPos =
          Math.sin(freq1 * (currPoint + phase1)) * amplitude + //base curve
          (Math.sin(freq2 * (currPoint + phase2)) * amplitude) / 2 + // interfering curve
          // initial Y position
          // let the wave be centered
          layerHeight / 2;

        // Piecewise function
        // Don't let Y drop below our height
        if (yPos > layerHeight) {
          yPos = layerHeight;
        }

        // Generated point
        let generatedPoint = `H ${xPos} V ${yPos}`;
        console.log(generatedPoint);

        // Generated point
        yield generatedPoint;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = {
  drawTerrain1,
};
