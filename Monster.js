//class for monster
class Monster {
    constructor(x, y, radius){
        var options = {
            density : 1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 100, 100);
    }
}