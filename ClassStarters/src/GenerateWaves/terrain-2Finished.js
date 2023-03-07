import { SVG } from "@svgdotjs/svg.js";
import Color from "color";

function drawterrain2(svg) {
  const layerHeight = 190;
  const layerWidth = document.documentElement.clientWidth;
  // new
  // This is the offset each layer will use. Now isn't centered
  const offsetY = 300;
  const layerTotal = 5;
  const baseColor = Color("#457cd6");

  // We use our values in multiple functions so lets
  let currLayer;
  let layerAnchorY;

  let currPoint;
  let amplitude;
  let freq1;
  let phase1;
  let freq2;
  let phase2;

  //add layers
  for (currLayer = 1; currLayer <= layerTotal; currLayer++) {
    addLayer().next().value;
  }

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
        amplitude = Math.random() * (layerHeight / layerTotal) + layerHeight / currLayer / layerTotal;
        // distance between peaks
        freq1 = (Math.random() * 0.02 * currLayer) / layerTotal + 0.005;
        // move the curve left / right
        phase1 = 500;

        // Interferring Curve
        freq2 = Math.random() * 0.01 + 0.005;
        phase2 = phase1 + (Math.random() + 250);

        // console.log(currLayer);
        // console.log(amplitude);
        // console.log(layerAnchorY);

        // Set initial pen coordinate
        let coord = `M 0 ${layerAnchorY} `;

        for (currPoint = 1; currPoint <= layerWidth + 1; currPoint++) {
          coord += addWave().next().value;
        }
        // Complete shape for fill
        coord += `V ${layerAnchorY} L 0 ${layerAnchorY}`;

        // Add path and HSL color
        svg.path(coord).fill(
          `${baseColor
            // Deepness of color
            .saturate(currLayer / layerTotal / 2.5)
            // Lowers the Shade of a color
            .darken(currLayer / layerTotal)
            .string()}`
        );

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
        // Set Points
        xPos = currPoint;
        yPos =
          Math.sin(freq1 * (currPoint + phase1)) * amplitude + //base curve
          (Math.sin(freq2 * (currPoint + phase2)) * amplitude) / 2 + // interfering curve
          // Initial Y position // Initial Y for the layer
          (layerAnchorY - layerHeight);
        // Try setting these to 0 one at a time
        // top of screen          - Commenting both out
        // way too high           - 0 for  Layer Anchor
        // no offset under wave   - 0 for layer height

        // console.log("X " + xPos + " Y " + yPos);

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
