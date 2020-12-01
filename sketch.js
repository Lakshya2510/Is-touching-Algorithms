var fixed, moving;

function setup() {
  createCanvas(1000, 600);
  obj3 = createSprite(700, 300, 100, 150);
  obj3.shapeColor = "green";
  moving = createSprite(100, 300, 100, 150);
  moving.shapeColor = "green";
  obj1 = createSprite(500,100,100,150);
  obj1.shapeColor = "green";
  obj2 = createSprite(500,500,100,150)
  obj2.shapeColou = "green";
}

function draw() {
  background(255, 255, 255);
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  obj1.shapeColor = "green";
  obj2.shapeColor = "green";
  obj3.shapeColor = "green";

  if(isTouching(moving,obj1)){
    moving.shapeColor = "red";
    obj1.shapeColor = "red";
  }
  else if(isTouching(moving,obj2)){
    moving.shapeColor = "red";
    obj2.shapeColor = "red";
  }
  else if(isTouching(moving,obj3)){
    moving.shapeColor = "red";
    obj3.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green"; 
  }
  
  drawSprites();
}
function isTouching(object1, object2){

  if (object1.x - object2.x < object1.width / 2 + object2.width / 2 
    && object2.x - object1.x < object1.width / 2 + object2.width / 2
    && object1.y - object2.y < object1.height / 2 + object2.height / 2 
    && object2.y - object1.y < object1.height / 2 + object2.height / 2) {
    
      return true;
  }
  else {
      
    return false;
  }

}