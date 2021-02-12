class Rubber{
  constructor(x, y, r) {
    var options = {
        'restitution':0.1,
        'friction':3.0,
        'density':0.5,

    }
    this.body = Bodies.circle(this.x,this. y,(this.r+20)/2, options);
    
    this.x=x;
    this.y=y;
    this.r=r;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   
    push();
    translate(pos.x, pos.y);

   rectMode(CENTER);
    fill("red");
    stroke("black");
    strokeWeight(4);
   ellipse(0,0,this.r,this.r);
    pop();
  }
};