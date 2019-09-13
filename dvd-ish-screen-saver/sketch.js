let dvd = new Dvd(427, 369) 

function setup() {
	createCanvas(windowWidth, windowHeight);
	dvd.set_canvas(windowWidth, windowHeight)
}

function draw() {
	background(0)
	dvd.draw()
}