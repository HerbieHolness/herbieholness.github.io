let isDarkMode = 0; 

let toggleBtn;
let lightModeIcon, darkModeIcon, blueModeIcon;
let bluemode=false;


function preload() {
  lightModeIcon = loadImage('sun.png');
  darkModeIcon = loadImage('moon.png');
  blueModeIcon = loadImage('blue moon.png');
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

  fill(0, 0, 255, 10);
  rect(0, 0, width, height);
  rectMode(CORNER);
  colorMode(RGB);
  if (isDarkMode === 0) {
    bluemode=false;
    fill(20, 20, 20, 100);
  } else if (isDarkMode === 1) {
    bluemode=false;
    fill(255, 255, 255, 10);
  }
  else {
    fill(0, 0, 255, 100);
    bluemode=true;
  }
  rect(0, 0, width, height);
  colorMode(HSB, 360, 100, 100, 100);
  let t = millis() / 1000;
  let num = map(sin((TWO_PI / 5) * t), -1, 1, 25, 50);
  let hueValue = (t * 60) % 360;
  let x = mouseX || touches[0]?.x || width / 2;
  let y = mouseY || touches[0]?.y || height / 2;
  if (bluemode){
    fill(hueValue, 0, 255);
  }
  else {
    fill(hueValue, 100, 100);
  }
  
  ellipse(x, y, num);
}

function touchMoved() {
  return false;
}
function toggleMode() {
  isDarkMode = (isDarkMode + 1) % 3; // Cycle through 0, 1, 2
  console.log(isDarkMode);
  document.body.classList.toggle('dark-mode');
  
  if (isDarkMode === 0) {
    toggleBtn.elt.src = darkModeIcon.canvas.toDataURL();
  } else if (isDarkMode === 1) {
    toggleBtn.elt.src = lightModeIcon.canvas.toDataURL();
  } else if (isDarkMode === 2) {
    toggleBtn.elt.src = blueModeIcon.canvas.toDataURL();
  }
}
