class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.array = [];
    this.image = loadImage("sprites/bird.png");
    this.thingy = loadImage("sprites/smoke.png")
  }

  display() {  
    var pos = this.body.position  ;
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    

    super.display();
if (this.body.velocity.x > 10 && pos.x > 200){
  var position = [pos.x, pos.y];
  this.array.push(position);
}
    

    for (var i= 0; i<this.array.length; i=i+1) {
      image(this.thingy, this.array[i][0], this.array[i][1])
    }
  }

}

