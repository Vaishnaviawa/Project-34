//class for invisible string
class Fly {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 350
        }
        this.pointB = pointB;
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    
    swing(){
        this.string.bodyA = null;
    }

    display(){
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(0);
            stroke(0);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
    
}