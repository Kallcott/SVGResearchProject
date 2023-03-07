const svg = require("@svgdotjs/svg.js");
import { drawTerrain1 } from "./GenerateWaves/terrain-1";
import { drawterrain2 } from "./GenerateWaves/terrain-2";
import { drawterrain3 } from "./GenerateWaves/terrain-3";
import { drawTerrain1 as T1fini } from "./GenerateWaves/terrain-1Finished";
import { drawterrain2 as T2fini } from "./GenerateWaves/terrain-2Finished";

//Id we will append the SVG to
id = "#svg1";

// Create our SVG
var svgObj = svg.SVG().addTo(id).viewbox(0, 0, 1000, 500).attr({ overflow: "hidden" });
// drawTerrain1(svgObj);
// drawterrain2(svgObj);

// T1fini(svgObj);
// T2fini(svgObj);
drawterrain3(svgObj);
