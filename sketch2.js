let isDarkMode = true; 
let toggleBtn;
let lightModeIcon, darkModeIcon;

function preload() {
  lightModeIcon = loadImage('sun.png');
  darkModeIcon = loadImage('moon.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  toggleBtn = createImg(darkModeIcon.canvas.toDataURL(), 'Toggle dark mode');
  toggleBtn.id('toggle-btn');
  toggleBtn.size(100, 100);
  toggleBtn.position(20, 20);
  toggleBtn.mousePressed(toggleMode);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}

function draw() {
  rectMode(CORNER);
  colorMode(RGB);
  fill(0, 0, 255, 10);
  rect(0, 0, width, height);

  fill(isDarkMode ? 20 : 255, 255, 255, isDarkMode ? 100 : 10, 10, 10);
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

function toggleMode() {
  isDarkMode = !isDarkMode;

  document.body.classList.toggle('dark-mode');

  toggleBtn.elt.src = isDarkMode 
    ? darkModeIcon.canvas.toDataURL()
    : lightModeIcon.canvas.toDataURL();
}

function touchMoved() {
  return false;
}
