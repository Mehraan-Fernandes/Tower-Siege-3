class Destroyer{
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':0.07,
            'density':1.0,
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
    }
    display(){
        push();
        fill("yellow")
        ellipseMode(RADIUS)
        circle(this.body.position.x,this.body.position.y,this.radius);
        pop();
    }
}