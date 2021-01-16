class Rope {
    constructor(bodyA,bodyB) {
      
     
      var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:1,
        angularStiffnes:1,
        length:200
        
      }
      this.pointB = pointB;
      this.pointX = pointA.X;
      this.pointY = pointA.Y - 250;

      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }

    display(){
      if(this.rope.bodyA){
      var pointA =this.rope.bodyA.position;
      var pointB =this.pointB
      push()
      strokeWeight(3.5);
      stroke("#fff");
      line(pointB.x,pointB.y,pointA.x,pointA.y);
      pop();
      
    };
  }
}