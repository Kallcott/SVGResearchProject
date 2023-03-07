import Color from "color";

const svg = require("@svgdotjs/svg.js");

export function drawTerrain1(svg) {
  //The height of a wave, and the Y position we start at.

  // height of curves

  // Our plan is to have many waves, at varying heights
  // One sine wave larger than the screen. We will only see it's incline
  // Smaller sine wave for each bump

  // Frequency, the distance between peaks
  // The addition sets the minimum height
  // The multiplication sets the max height

  // move the curve left / right

  // We can add sine waves to create waves within our wave.

  // quality of image

  // Set initial pen coordinate

  // Generate points width to width

  //complete shape for fill

  //Add shape to path

  // Generate the path of a wave
  function* addWave() {
    try {
      while (true) {
        // initial Y position
        // let the wave be centered

        // Piecewise function
        // Don't let Y drop below our height

        // Generated Point

        // Return
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
