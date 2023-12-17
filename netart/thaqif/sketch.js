// From "The Nature of Code" by Daniel Shiffman, 2012
// www.natureofcode.com

// Example 7.1
// Wolfram elementary cellular automata 
// (with aditional fetures)

// Translated from Processing
// www.skolekoding.no/natureofcode
// www.skolekoding.no/wolfram
// Stein Olav Kivle

// Picture of all CA's from rule 0 to rule 255
// https://writings.stephenwolfram.com/data/uploads/2012/07/three-1.gif

let CA_object; // Objekt of class CA
let rule;
let pixleWidth;

function setup() {
  createCanvas(600, 400);
  fill(0);
  
  rule = 0;
  pixleWidth = 10;
  // noStroke(); // Grid or no grid
  drawCA(); // First CA, rule = 0
}


function keyPressed() {
  if (keyCode === 39) rule++; // Arrow right 
  else if (keyCode === 37) rule--; // Arrow left
  else if (keyCode === 38) rule += 10; // Arrow up
  else if (keyCode === 40) rule -= 10; // Arrow down

  if (rule > 255) rule = 0;
  if (rule < 0) rule = 255;
  drawCA();
}

function drawCA() {
  background(255);
  fill(0);
  CA_object = new CA(rule, pixleWidth);
  for (let i = 0; i < height / pixleWidth; i++) {
    CA_object.generate_row();
    CA_object.display_row();
  }
}


/////////////////////////////////////////////////////
class CA {
  // Three methodes: generate_row, display_row, make_ruleset
  constructor(n, w) {
    this.w = w; // The width of the cells
    this.rule = n;
    this.cells = [];
    this.generation = 0;
    // Making the rule
    this.ruleset = [];
    this.makeRuleset(this.rule);
  }


  /////////////////////////////////////////////
  generate_row() {
    // First row allways the same
    if (this.generation === 0) {
      for (let i = 0; i < width / this.w; i++) 
        this.cells[i] = 0;
        
      // Filling the middle cell
      this.cells[int(this.cells.length / 2)] = 1;
    }
    // The other rows
    else {
      let nextgen = [];
      // Filling the first cell
      nextgen[0] = 0;
      // Filling the other cells
      for (let i = 1; i < this.cells.length - 1; i++) {
        // Convert 1 and 0 to string
        let left = str(this.cells[i - 1]);
        let me = str(this.cells[i]);
        let right = str(this.cells[i + 1]);
        // Make 3-char string
        let s = left + me + right;
        // Get the corresponding ruleset value
        nextgen[i] = this.ruleset[int(s, 2)];
      }
      // Filling the last cell
      nextgen[this.cells.length - 1] = 0;
      // Copying the array
      this.cells = nextgen;
    }
    this.generation++;
  }

  /////////////////////////////////////////
  display_row() {
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i] == 1) fill(0);
      else fill(255);
      rect(i * this.w, 40 +
        this.generation * this.w, this.w, this.w);
    }
  }


  /////////////////////////////////////////////////////////////////
  makeRuleset(rule) {
    fill(0);
    // Convert to binary
    let preRuleset = convertToBinary(rule, 8);

    // Reverse order
    let j = preRuleset.length - 1;
    for (let i = 0; i < preRuleset.length; i++) {
      this.ruleset[i] = preRuleset[j];
      j--;
    }

    // Write 111  110  101  100  011  010  001  000
    for (let i = this.ruleset.length -1; i > -1 ; i--) {
      let b = convertToBinary(i, 3);
      text(b[0] + b[1] + b[2], 34 + 30 * (this.ruleset.length-i), 10);
    }
    // Write the decimal and binary rule
    text("Rule " + this.rule + ": ", 10, 25);
    for (let i = 0; i < preRuleset.length; i++) 
      text(preRuleset[i], 70 + 30 * i, 25);

    // Write arrow explanation
    text("Arrow: right +1, left -1, up +10, down -10", 10, 42);

    //*********************************
    function convertToBinary(d, n) {
      // Convert d to binary
      let b = parseInt(d, 10).toString(2);
      // Split each charater to an array
      b = b.split('');
      // Add cells to the left to get n cells
      // array.splice(1, 0, '2') -> inserts (0) value 2 to cell nr 1
      while (b.length < n) 
        b.splice(0, 0, '0');
      return b
    }
  }

}