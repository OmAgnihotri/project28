class Stone extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/stone.png");
    Matter.Body.setMass(this.body,this.body.mass*6);
    this.body.frictionAir=0.001;
  }
}
