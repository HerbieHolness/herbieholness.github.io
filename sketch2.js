function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Step 1: Fading effect (reset rectMode to CORNER)
  rectMode(CORNER);
  colorMode(RGB);
  fill(255, 255, 255, 25);
  rect(0, 0, width, height); // Fade the whole screen

  // Step 3: Draw the ellipse with HSB coloring
  colorMode(HSB, 360, 100, 100, 100);
  let cycleTime = 5;
  let t = millis() / 1000;
  let beat = sin((TWO_PI / cycleTime) * t);
  let num = map(beat, -1, 1, 25, 50);
  let hueValue = (t * 60) % 360;

  // Use touch positions for mobile, fallback to mouse positions
  let x = mouseX || touches[0]?.x || width / 2;
  let y = mouseY || touches[0]?.y || height / 2;

  fill(hueValue, 100, 100);
  ellipse(x, y, num);
}

// Disable scrolling on mobile
function touchMoved() {
  return false;
}
