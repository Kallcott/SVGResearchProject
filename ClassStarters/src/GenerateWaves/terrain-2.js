import { SVG } from "@svgdotjs/svg.js";
import Color from "color";

function drawterrain2(svg) {
  const layerHeight = 190;
  const layerWidth = document.documentElement.clientWidth;
  // new
  // This is the offset each layer will use. Now isn't centered

  // Lets add color

  // We use our values in multiple functions, now we have to declare everything
  let currLayer;
  let layerAnchorY;

  let currPoint;
  let amplitude;
  let freq1;
  let phase1;
  let freq2;
  let phase2;

  //add layers

  // Define our Functions

  // Create a layer
  function* addLayer() {
    try {
      while (true) {
        // Set position each layer will start
        layerAnchorY = currLayer * (layerHeight / layerTotal) + offsetY;

        // Set sine wave properties
        // Height of curves
        // Ratio of page height

        // distance between peaks

        // move the curve left / right
        phase1 = 500;

        // Interferring Curve

        // console.log(currLayer);
        // console.log(amplitude);
        // console.log(layerAnchorY);

        // Set initial pen coordinate

        // Loop through the wave
        for (currPoint = 1; currPoint <= layerWidth + 1; currPoint += detail) {
          coord += addWave().next().value;
        }
        // Complete shape for fill

        // Add path and HSL color

        // Deepness of color

        // Lowers the Shade of a color

        yield;
      }
    } catch (e) {
      console.log(e);
    }
  }

  // Generate the path of a wave
  function* addWave() {
    try {
      while (true) {
        // set Points

        // Initial Y position // Initial Y for the layer

        // Try setting these to 0 one at a time
        // top of screen          - Commenting both out
        // way too high           - 0 for  Layer Anchor
        // no offset under wave   - 0 for layer height

        // console.log("X " + xPos + " Y " + yPos);

        // generated point
        let generatedPoint = `H ${xPos} V ${yPos}`;

        yield generatedPoint;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = {
  drawterrain2,
};
