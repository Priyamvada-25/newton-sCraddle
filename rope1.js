class Rope1{
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
           this.rope1= Constraint.create(options);
           World.add(world,this.rope1);
    }
    display(){
        var pointA= this.rope1.bodyA.position
        var pointB= this.rope1.bodyB.position
        line(pointA.x,pointA.y-35,pointB.x-140,pointB.y)
    
    }
    };