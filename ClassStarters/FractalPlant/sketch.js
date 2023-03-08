
//An L-System is a string of characters with rules applied to each character. Each generation looks at the characters in the current list, and if it matches one of the rules, in the next generation it replaces that character with the rule.

/**
 * our rules that will govern how our sketch will be drawn
 */
let rules = {
    "X": "F+[[X]-X]-F[-FX]+X",
    "F": "FF"
  }
  
  let len = 1;
  let ang;
  
  let drawRules;
  
  let word = "X";

  /**
   * used to setup our rules for each character
   */
  function setup() {
    createCanvas(1080, 720); // sets the size of our canvas/viewbox
    strokeWeight(2.5);
    ang = 25;
    
    drawRules = {
      // "F" draws forward
      "F": () => {
        stroke(100, 50, 0); // -> represents the color of the branch
        line(0, 0, 0, -len); // draws our line upwards in the negative y axis, in this case we are using a length of 3
        translate(0, -len); // moves us to where we're going to start drawing from next time, to the end of the line
      },
      "+": () => {
        // P5 works in radians and the angle is in degrees, to get the value in radians you use PI/180 * the angle, this will turn left by 25 degrees
        rotate(PI/180 * -ang);
      },
      "-": () => {
        rotate(PI/180 * ang); // turns right by 25 degrees
      },
      // push, saves the position angles into a save point
      "[": push,
      "]": () => {
        noStroke();
        fill(0, 200, 0); // -> fills the color of the leaf
        ellipse(0, 0, 2 * len, 5 * len); // -> 0,0 represents the end of the branch, followed by the size of the leaf
        pop(); // -> means we've reached the end of the line, going back to branch in a new direction, and restores the current values fromthe save point
      },
    }
    // only calls the draw function once
    noLoop();
  }
  
  /**
   * draws our sketch
   */
  function draw() {
    background(220);
    
    // push saves the currecnt positions of our characters
    push();
    // translate moves the starting point to the bottom of the screen, 
    // 1/4th to the right
    translate(width/4, height);
    // rotate starts the angle at 25 degrees
    rotate(PI/180 * ang);
    for(let i = 0; i < word.length; i ++) {
      let c = word[i];
      if(c in drawRules) {
        drawRules[c]();
      }  
    }
    // pop restores the saved positions
    pop();
  }
  
/**
 * calls the draw function with every click
 */
  function mouseReleased() {
    word = generate();
    console.log(word);
    draw();
  }
  
  /**
   * loops through our string of characters, if a character has a rule, it will
   * add that rule, otherwise it will only add the current character
   * @returns the next generation of the L-System
   */
  function generate() {
    let next = "";
    for(let i = 0; i < word.length; i ++) {
      
      let c = word[i];

      if(c in rules) {
        next += rules[c];
      } else {
        next += c;
      }
    }
    return next;
  }