let balls = [];
const nameItems = [];
let capture1;
let douremember;
let data;
let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQs3lXb8shjQ29ri8LQdk41mCHoeMzY8w6ynZJU3YegFv8ZPkeq8rhXR-kbrIF-8MhWFgdW-CPib4VQ/pub?gid=0&single=true&output=csv';

let nameInput;
let button;

async function preload(){
  
 let cacheBuster = new Date().getTime();

 data = await loadTable(url, "csv", "header");

 
  let urlWithCacheBuster = url + "&v=" + cacheBuster;

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture1 = createCapture(VIDEO);
  capture1.hide();
  
  douremember = loadImage("douremember.gif");
  
  nameInput = select("#textInput");
  nameInput.position(width/2-204, windowHeight-160);
  nameInput.size(400, 100);
  
  button = select("#textButton");
  button.position(width/2 - 205, nameInput.y+115);
  button.size(410, 30)
}






function draw() {

  background(255)

  image(capture1,width/2, height/2, width, height)
  var currentTime = millis();


    if (data){
      if (currentTime < 1000){
      let numRows = data.getRowCount();
      let memoryCollumn = data.getColumn(0);

    for(let i = 0; i < numRows; i++){
      let memory = memoryCollumn[i];
      balls.push(new Ball(random(width), random(height), i));
      nameItems.push(memory);
    }
  } 



        for(let j = 0; j < balls.length; j++){
        balls[j].drawText();
        balls[j].moveText();
        balls[j].checkBoundary();
        balls[j].fadeText();
    }

    
    

  }



  
  

  
    
  imageMode(CENTER);
  image(douremember, width/2, 80, 504, 210);
  
}



