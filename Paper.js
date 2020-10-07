class Paper{
    constructor(x,y,radius){
        this.image = loadImage("images/paper.png");
        var options={
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius = radius;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(0,0,this.radius,this.radius);
        pop();
        image(this.image,pos.x,pos.y);
    }
}