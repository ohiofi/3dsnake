function keyPressed() {
   //space
  if (keyIsDown(32)) {
    requestPointerLock();
    mrSnake.jump()
  }
}

function checkPlayerControls() {
  // NOTE: tilt camera up/down is a camera control found in the Camera class

  // rotate player left/right
  //player.transform.rotation.y -= -movedX * horizontalTiltSpeed;
  // d
  if (keyIsDown(68)||keyIsDown(RIGHT_ARROW)) {
    requestPointerLock();
    mrSnake.goRight()
  }
  // a
  if (keyIsDown(65)||keyIsDown(LEFT_ARROW)) {
    requestPointerLock();
    mrSnake.goLeft()
  }
  // s
  if (keyIsDown(83)||keyIsDown(DOWN_ARROW)) {
    requestPointerLock();
    mrSnake.goDown()
  }
  // w
  if (keyIsDown(87)||keyIsDown(UP_ARROW)) {
    requestPointerLock();
    mrSnake.goUp()
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
