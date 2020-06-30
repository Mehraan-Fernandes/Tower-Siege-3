class Blocks{
    constructor(x,y,width,height){
        var options={
            friction:0.07,
            'mass':1
        }
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width
        this.height=height
        this.Visibility=255
        this.image=loadImage("images/rect.png")
        World.add(world,this.body)
    }
    
    display(){
        if(this.body.speed<20){
        push();

        strokeWeight(5)
        stroke("white")
        fill(7,211,247)
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();
        } else {
            World.remove(world, this.body)
            push();
            this.Visibility = this.Visibility - 30
            tint(255, this.Visibility)
            //translate()
            image(this.image,this.body.position.x, this.body.position.y,this.width, 50);
            pop();
        }
    }

    score(){
        if (this.Visibility < 0 && this.Visibility > -1000){
            score++;
        }
    }
}