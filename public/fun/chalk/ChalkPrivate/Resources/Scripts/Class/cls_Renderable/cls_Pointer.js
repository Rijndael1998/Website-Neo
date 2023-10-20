class Pointer { //SHOULD EXTEND RENDERABLE!!!
    constructor(Start,radius,Target,colour) {
        //radius around player
        this.r=radius;

        this.Start = Start;
        this.Target = Target;
        
        //target location(x,y)
        
        this.colour = color(colour);
    }
    
    anglePoint() {
        let dx = (this.Target.x)+this.Target.width/2 - this.Start.x;
        let dy = (this.Target.y)+this.Target.height/2 - this.Start.y;
        
        this.rotAngle = atan2(dx,dy);
        //this.calculateXY(this.rotAngle);
    }

//    calculateXY(angle) {
//        this.yr = -((this.radius) * sin(angle));
//        this.xr = ((this.radius)**2-(this.yr)**2)**(1/2);
//    }
    drawObject() {
        if(!this.Start.locked) {
            this.anglePoint();
            //this.calculateXY(this.rotAngle);
            push();
            //fill(250,250,250,2);
            noFill();
            strokeWeight(8);
            stroke(240,240,240,20);
            ellipse(this.Start.x+10, this.Start.y+(this.Start.height/2), 60+this.Start.height);

            translate((this.Start.x+this.Start.width/2), (this.Start.y+this.Start.height/2));
            rotate(-this.rotAngle);
            noStroke();
            //change fill to this.colour but transparent
            fill(this.Start.color);
            triangle(0,  32+(this.Start.height/2+30), 
                     12,(this.Start.height/2+30), 
                     -12,(this.Start.height/2+30));
            //ellipse(this.Start.x, this.Start.y, 40, 40);

            pop();
        } 
    }
}