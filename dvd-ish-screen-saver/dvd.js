class Dvd {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 80;
        this.height = 60;

        this.xspeed = 3;
        this.yspeed = 3;

        this.canvas_width;
        this.canvas_height;
    }

    set_canvas(canvas_width, canvas_height) {
        this.canvas_width = canvas_width;
        this.canvas_height = canvas_height;
    }

    draw() {
        this.check_collision_and_bounce();
        rect(this.x, this.y, this.width, this.height)
        this.x += this.xspeed;
        this.y += this.yspeed;
    };

    check_collision_and_bounce() {
        if(this.x + this.width >= this.canvas_width || this.x <= 0) {
            this.xspeed = - this.xspeed
        }

        if(this.y + this.height >= this.canvas_height || this.y <= 0) {
            this.yspeed = - this.yspeed
        }
    }
}