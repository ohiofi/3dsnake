class Snake{
  constructor(){
    this.snakeBody = [
      {x: 500, y: 0, z:500},
      {x: 450, y: 0, z:500},
  {x: 400, y: 0, z:500}
    ]
    this.dx = 1;
    this.dz = 0;
    this.velocityY = 0;
    this.speed = 50;
    this.snakeLength = 3;
    this.color = "blue"
  }
  update(){
    // apply gravity
    if(!this.isGrounded()){
      this.velocityY -= gravity;
    }
    
    if(frameCount%max(floor(15-this.snakeLength*0.2),1)==0){
      this.moveSnake()
    }
    
  }
  show(){
    noStroke()
    for(let i=0;i< this.snakeBody.length;i++){
      let segmentSize = max(this.speed/2-i,10)
      
      // draw shadow if not grounded
      if(this.snakeBody[i].y>0){
        push()
        translate(this.snakeBody[i].x,1,this.snakeBody[i].z);
        fill(0)
        ellipsoid(segmentSize,1,segmentSize)
        pop()
      }
      push()
      translate(this.snakeBody[i].x, this.snakeBody[i].y+segmentSize/2, this.snakeBody[i].z)
      specularMaterial(this.color)
      shininess(150);
      sphere(segmentSize)
      pop()
      
    }
  }
  moveSnake(){
    let head = {x: this.snakeBody[0].x + this.dx*this.speed, y: this.snakeBody[0].y, z: this.snakeBody[0].z+this.dz*this.speed};
    
    // calc jump
    head.y = head.y+this.velocityY
    if(head.y<0){
      head.y=0;
    }
    this.snakeBody.unshift(head);
    if(this.snakeBody.length>this.snakeLength){
      this.snakeBody.pop();
    }
    for(let i=0;i< this.snakeBody.length;i++){
      this.checkBounds(i)
    }
  }
  checkBounds(i){
    if(this.snakeBody[i].x>1000){
      //for(let i=0;i< this.snakeBody.length;i++){
        this.snakeBody[i].x -= (1000+this.speed);
      //}
    }else if(this.snakeBody[i].x<0){
      //for(let i=0;i< this.snakeBody.length;i++){
        this.snakeBody[i].x += (1000+this.speed);
      //}
    }else if(this.snakeBody[i].z>1000){
      //for(let i=0;i< this.snakeBody.length;i++){
        this.snakeBody[i].z -= (1000+this.speed);
      //}
    }else if(this.snakeBody[i].z<0){
      //for(let i=0;i< this.snakeBody.length;i++){
        this.snakeBody[i].z += (1000+this.speed);
      //}
    }
  }
  isGrounded(){
    return this.snakeBody[0].y <= 0
  }
  goUp(){
    if(this.dz == -1){
      return
    }
    this.dx =0
    this.dz = 1
  }
  goDown(){
    if(this.dz == 1){
      return
    }
    this.dx =0
    this.dz = -1
  }
  goLeft(){
    if(this.dx == 1){
      return
    }
    this.dx =-1
    this.dz =0
  }
  goRight(){
    if(this.dx == -1){
      return
    }
    this.dx = 1
    this.dz =0
  }
  jump(){
    if(this.isGrounded()){
      this.snakeBody[0].y += 10
      this.velocityY = 100-this.snakeBody.length+max(floor(20-this.snakeLength*0.3),1)
    }
    
  }
  isTouching(foodObject){
    return dist(foodObject.x,foodObject.y,foodObject.z,this.snakeBody[0].x,this.snakeBody[0].y,this.snakeBody[0].z) <= this.speed
  }
  hasCollided(){
    for (let i = 1; i < this.snakeBody.length; i++)
    {    
      if(dist(this.snakeBody[i].x,this.snakeBody[i].y,this.snakeBody[i].z,this.snakeBody[0].x,this.snakeBody[0].y,this.snakeBody[0].z) < this.speed ){
        return true
      }

    }
    return false
  }
}