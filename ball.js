class ball {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;
      //this.image = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      /*this.body.position.x = mouseX;
      this.body.position.y = mouseY;*/
      ellipseMode(RADIUS)
      fill("yellow");
      ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
}