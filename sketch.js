function setup() {
	createCanvas(900, 710);
	const BACKGROUND_COLOR = [0, 32, 63];
	background(BACKGROUND_COLOR[0], BACKGROUND_COLOR[1], BACKGROUND_COLOR[2]);
	noLoop();
  }
  
//   function draw() {
// 	if (mouseIsPressed) {
// 	  fill(0);
// 	} else {
// 	  fill(255);
// 	}
// 	ellipse(mouseX, mouseY, 120, 80);
//   }
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const numberOfCircles = 6;
let step = 500;
let moveX = 3;
let moveY = 100;
let stepX =0;
let stepY =0;
let xStart = 0
let circleX = 180;
let circleY = 100;

async function draw(startX = 100, startY = 0) {

	stepX = startX;
	stepY = startY;
	for (i = 0; i < numberOfCircles; i++) {

		const r = random(255); // r is a random number between 0 - 255
		const g = random(100,200); // g is a random number betwen 100 - 200
		const b = random(100); // b is a random number between 0 - 100
		const a = random(200,255); // a is a random number between 200 - 255

		fill(r, g, b, a);
		//stepX = stepX + moveX;
		stepY = stepY + moveY;
		//rotateY(millis() / 1000);
		let newCircleX = random(100,180)
		ellipse(stepX, stepY, newCircleX, circleY);
		

	}

	startX = startX + 100;
	//startY = startY - 80;

	if (startX < 900) {
		//await delay(500)

		draw(startX, startY);
	}
	

	
}
function mousePressed() {
	loop();
  }
  
  function mouseReleased() {
	noLoop();
  }