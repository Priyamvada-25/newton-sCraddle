class Rope2{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX= offsetX
        this.offsetY=offsetY
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
          //  stiffness:0.04,
            //length:10
        }
           this.rope2= Constraint.create(options);
           World.add(world,this.rope2);
    }
    display(){
        var pointA= this.rope2.bodyA.position
        var pointB= this.rope2.bodyB.position
        line(pointA.x,pointA.y-35,pointB.x-70,pointB.y)
    
    }
    };