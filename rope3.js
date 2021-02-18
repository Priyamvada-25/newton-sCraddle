class Rope3{
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
           this.rope3= Constraint.create(options);
           World.add(world,this.rope3);
    }
    display(){
        var pointA= this.rope3.bodyA.position
        var pointB= this.rope3.bodyB.position
        line(pointA.x,pointA.y-35,pointB.x,pointB.y)
    
    }
    };