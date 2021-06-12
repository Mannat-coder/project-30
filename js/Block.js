class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            
           
        }
        this.visiblity=255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        
       
if(this.body.speed<3){
 
  rectMode(CENTER);
  rect(this.body.position.x,this.body.position.y,this.width, this.height);
}
else{
  World.remove(world,this.body);
        push();
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity);
        rect(this.body.position.x,this.body.position.y,this.width, this.height);
        pop();
      }
}
}