class block1{
  constructor(x, y, width, height){
      var option = {
          isStatic :false,
          restitution : 0.7,
          friction : 10,
          density : 1
      }
      this.body = Bodies.rectangle(x, y, width, height, option);
      World.add(world, this.body);
      this.height = height;
      this.width = width;
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
  }

  display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
  }
}