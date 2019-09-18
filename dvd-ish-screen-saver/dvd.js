class Dvd {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        
        this.side_size;
        this.width;
        this.height;

        this.speed;
        this.xspeed;
        this.yspeed;

        this.canvas_width;
        this.canvas_height;

        this.img;
        this.img_list_path = ["./imgs/cute.png","./imgs/cool.png", "./imgs/Praise-the-Sun.png"];
        this.img_index = 0;
    }

    set_canvas(canvas_width, canvas_height) {
        this.canvas_width = canvas_width;
        this.canvas_height = canvas_height;

        this.side_size = Math.max(120, Math.floor(canvas_width / 10), Math.floor(canvas_height / 10))
        this.width = this.side_size;
        this.height = this.side_size;

        this.speed = Math.max(5, Math.floor(this.side_size * 0.01));
        this.xspeed = this.speed;
        this.yspeed = this.speed;
    }

    draw() {
        this
        this.check_collision_and_bounce();

        image(this.img, this.x, this.y, this.width, this.height)
        
        this.x += this.xspeed;
        this.y += this.yspeed;
    };

    get_next_img_index() {
        if(this.img_index == 2) {
            this.img_index = 0;
        }
        else {
            this.img_index  += 1;
        }
        console.log(this.img_index)
    }

    check_collision_and_bounce() {
        if(this.x + this.width >= this.canvas_width || this.x <= 0) {
            this.xspeed = - this.xspeed;
            this.get_next_img_index();
            this.img = loadImage(dvd.img_list_path[this.img_index]);
        }

        if(this.y + this.height >= this.canvas_height || this.y <= 0) {
            this.yspeed = - this.yspeed;
            this.get_next_img_index();
            this.img = loadImage(dvd.img_list_path[this.img_index]);

        }
    }

    
}