function keyPressed() {
   //space
  if (keyIsDown(32)) {
    //requestPointerLock();
    mrSnake.jump()
  }
   //enter
  if (keyIsDown(13)) {
    //requestPointerLock();
    msSnake.jump()
  }
}

function checkPlayerControls() {
  // NOTE: tilt camera up/down is a camera control found in the Camera class

  // rotate player left/right
  //player.transform.rotation.y -= -movedX * horizontalTiltSpeed;
  // d
  if (keyIsDown(68)) {
    requestPointerLock();
    mrSnake.goRight()
  }
  // a
  if (keyIsDown(65)) {
    requestPointerLock();
    mrSnake.goLeft()
  }
  // s
  if (keyIsDown(83)) {
    requestPointerLock();
    mrSnake.goDown()
  }
  // w
  if (keyIsDown(87)) {
    requestPointerLock();
    mrSnake.goUp()
  }
  // d
  if (keyIsDown(RIGHT_ARROW)) {
    requestPointerLock();
    msSnake.goRight()
  }
  // a
  if (keyIsDown(LEFT_ARROW)) {
    requestPointerLock();
    msSnake.goLeft()
  }
  // s
  if (keyIsDown(DOWN_ARROW)) {
    requestPointerLock();
    msSnake.goDown()
  }
  // w
  if (keyIsDown(UP_ARROW)) {
    requestPointerLock();
    msSnake.goUp()
  }
 
  // // right
  // if (keyIsDown(RIGHT_ARROW)) {
  //   requestPointerLock();
  //   player.transform.position.x +=
  //     cos(player.transform.rotation.y) * moveSpeed;
  //   player.transform.position.z -=
  //     sin(player.transform.rotation.y) * moveSpeed;
  // }
  // // left
  // if (keyIsDown(LEFT_ARROW)) {
  //   requestPointerLock();
  //   player.transform.position.x -=
  //     cos(player.transform.rotation.y) * moveSpeed;
  //   player.transform.position.z +=
  //     sin(player.transform.rotation.y) * moveSpeed;
  // }
  // // reverse
  // if (keyIsDown(DOWN_ARROW)) {
  //   requestPointerLock();
  //   player.transform.position.x -= sin(player.transform.rotation.y) * moveSpeed;
  //   player.transform.position.z -= cos(player.transform.rotation.y) * moveSpeed;
  // }
  // // forward
  // if (keyIsDown(UP_ARROW)) {
  //   requestPointerLock();
  //   player.transform.position.x += sin(player.transform.rotation.y) * moveSpeed;
  //   player.transform.position.z += cos(player.transform.rotation.y) * moveSpeed;
  // }
  // plus
  if(keyIsDown(187)){
    requestPointerLock();
    distAbove *= 0.99;
    distBehind *= 0.99;
    cam.setParent(player, distBehind, distAbove);
  }
  // minus
  if(keyIsDown(189)){
    requestPointerLock();
    distAbove *= 1.01;
    distBehind *= 1.01;
    cam.setParent(player, distBehind, distAbove);
  }
}
function mouseClicked() {
  requestPointerLock();
}
