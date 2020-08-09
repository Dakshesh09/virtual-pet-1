var dog;
var happyDog;
var foodS;
var foodStock;
var database; 

function preload()
{
  dog_img = loadImage("dogImg.png");
  happyDog_img = loadImage("dog Img1.png");
 
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog = createSprite(100,200);
  dog.addImage("dog_img ");
  database=firebase.database();
  foodStock = dataBase.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage("happyDog_img");

  }
  drawSprites();
  //add styles here
  text("")


}

function readStock(data){
  foodS = data.val();
} 

function writeStock(x){
  database.ref('/').update({
    Food:x
  })

  fill(255,255,254); 
  stroke("black"); 
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}



