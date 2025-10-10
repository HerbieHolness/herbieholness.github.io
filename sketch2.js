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
  rectMode(CORNER);
  colorMode(RGB);
  fill(255, 255, 255, 25);
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
