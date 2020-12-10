class Block {
    constructor(x,y,width,height) {
      var options = {
         restituion : 0.8,
         friction : 1,
         density : 0.04
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill(214,185,130)
      rect(0,0, this.width, this.height);
      pop()
    }
  };
