var car, wall, speed, weight;


function setup() {
  createCanvas(900,400);
  car = createSprite(100, 200, 20, 20);
   car.velocityX=speed=random(55, 90);
  

  wall = createSprite(800, 200, 39, height/2)

speed=random(55, 90)
weight=random(400, 1500)
}

function draw() {
  background("black");  
  
  if (wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX=0
      var deformation=0.5 * weight * speed* speed/22509
      if (deformation<180){
        car.shapeColor=color("red")

      }
      if (deformation<180 && deformation>100) {

      car.shapeColor=color("yellow")



      }

     if (deformation>100) {

     car.shapeColor=color("green")
 }






  }
  
  
    
  
  
  
  
  
  
  
  
  
  drawSprites();
}