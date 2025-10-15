

let isDarkMode = true; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  let toggleButton = createButton('dark mode toggle');
  toggleButton.mousePressed(toggleTheme);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}

function draw() {

  fill(0, 0, 255, 10);
  rect(0, 0, width, height);
  rectMode(CORNER);
  colorMode(RGB);
  if (isDarkMode) {
    fill(20, 20, 20, 100);
  } else {
    fill(255, 255, 255, 10);
  }
  rect(0, 0, width, height);
  colorMode(HSB, 360, 100, 100, 100);
  let t = millis() / 1000;
  let num = map(sin((TWO_PI / 5) * t), -1, 1, 25, 50);
  let hueValue = (t * 60) % 360;
  let x = mouseX || touches[0]?.x || width / 2;
  let y = mouseY || touches[0]?.y || height / 2;

  fill(hueValue, 100, 100);
  ellipse(x, y, num);
}

function touchMoved() {
  return false;
}
function toggleTheme() {
  isDarkMode = !isDarkMode; // Flip the boolean value
}
