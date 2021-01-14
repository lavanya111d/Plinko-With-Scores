class Particles {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,30,options);
      this.radius = 30;
      this.color = color(random(0,255), random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, 30, 30);
    }
  };