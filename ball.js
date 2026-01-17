

class Ball{
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 1;
    this.opac = 255;
  }
  drawText(){
    
    textSize(15);
    textFont('arial')
    fill(0,0,0, this.opac);
    text(nameItems[this.z],this.x, this.y, 400);
  }
  
  moveText(){
    
    this.y = this.y + this.dy;
}
  fadeText(){
    if (frameCount % 100 == 0) {
      this.opac = this.opac - 1;
    }
  }

  checkBoundary(){
    
    if (this.y > height+15){
      this.y = 0 - nameItems[this.z].length/4;
    }
  }
  
}


