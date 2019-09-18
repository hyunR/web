let dvd = new Dvd(142, 328) 

function preload() {
	dvd.img = loadImage(dvd.img_list_path[0]);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	dvd.set_canvas(windowWidth, windowHeight);
}

function draw() {
	background(0)
	dvd.draw()
}