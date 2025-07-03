class Food{
  constructor(){
    this.x = floor(random(0,11) )*100
    this.y = 20;
    this.z = floor(random(0,11) )*100
    this.id = random()*5+random()*5+1
    this.color = color(random(200,255),random(200,255),0)
  }
  update(){
    //this.y = abs(sin(frameCount*this.id*2)*100)+20
  }
  show(){
    push()
    translate(this.x,this.y,this.z)
    //rotateX(frameCount + this.x * this.z);
    rotateY(frameCount*this.id + this.x + this.z + this.id);
    specularMaterial(this.color);
    shininess(150);
    torus(15, 7);
    pop()
  }
}