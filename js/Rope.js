class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:25
        }
        this.pointB = pointB;
        this.rope=Constraint.create(options)
        World.add(world,this.rope);
    }
    attach(body){
        this.rope.bodyA=body;
        gameState="onRope"
    }
    
    fly(){
        this.rope.bodyA=null;
    }

    display(){
       if(this.rope.bodyA){
            push();
            var pointA=this.rope.bodyA.position
            var pointB=this.pointB;
            strokeWeight(5)
            stroke("green")
            line(pointA.x,pointA.y-5,pointB.x,pointB.y)
            pop();
      }
    }
}