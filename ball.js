class Ball
{
    constructor(x,y,width,height)
    {
        var options =
        {
            
            frictionAir:0.005,
            density:1
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display()
    {
        var posA = this.body.position.x;
        var posB = this.body.position.y;
        var angle = this.body.angle ;
        push();
        translate(posA,posB);
        rotate(angle);
        //fill("white");
        //stroke("green");
        ellipse(0,0,this.width,this.height);
        pop();
    }
}