
/**
 * our rules that will govern how our sketch will be drawn
 */
let rules = {
    "A": "ABA",
    "B": "BBB"
  }
  
  let len = 10;
  
  let drawRules;
  
  let word = "A";

  /**
   * used to setup our rules for each character
   */
  function setup() {
    createCanvas(1080, 720);
    
    drawRules = {
      "A": () => {
        line(0, 0, 0, -len);
        translate(0, -len);
      },
      "B": () => {
        translate(0, -len);
      }
    }
    noLoop();
  }
  
  /**
   * draws our sketch
   */
  function draw() {
    background(220);
    push();
    translate(width/2, height);
    
    for(let i = 0; i < word.length; i ++) {
      let c = word[i];
      if(c in drawRules) {
        drawRules[c]();
      }  
    }
    pop();
  }
  
/**
 * calls the draw function with every click
 */
  function mouseReleased() {
    word = generate();
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