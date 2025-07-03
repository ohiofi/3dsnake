class Food{
  constructor(){
    this.x = floor(random(0,11) )*100
    this.y = 0;
    this.z = floor(random(0,11) )*100
    this.id = random()
  }
  update(){
    
  }
  show(){
    push()
    translate(this.x,20,this.z)
    //rotateX(frameCount + this.x * this.z);
    rotateY(frameCount + this.x + this.z + this.id);
    specularMaterial("yellow");
    shininess(150);
    torus(15, 7);
    pop()
  }
}