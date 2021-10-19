class Snow {
    constructor(x, y,r) {
        var options = {
            restitution: 1,
            friction: 0.05,
            density:0.1
            
        }
        this.image=loadImage("snow4.webp");
        this.r =r
        this.body = Bodies.circle(x, y, r, options);
        
        World.add(world,this.body);
    }

    
    display() {
        var pos = this.body.position;
        var angle = this.body.angle; 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*4,this.r*4);
        pop();
    }

};