class Log {
    constructor(x,y,height,angle){
    
        var options = {
        restitution : 1,
        friction : 1
        }
       this.body = Bodies.rectangle(x,y,20,height,angle,options);
       this.width = 20;
       Matter.Body.setAngle(this.body,angle)
       this.height = height;
      World.add(earth,this.body);
    }
    
    
    display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill ("pink")
        rectMode(CENTER);
        rect(0 , 0 ,this.width,this.height)
      pop();
        
    }
    
    
    }