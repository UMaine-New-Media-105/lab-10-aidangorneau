let myFrog
function setup() {
  createCanvas(500, 500);
  frog = []
  car = []
  rows = [75, 125, 175, 325, 375, 425]
  startingFrog = 1
  startingCar = 20
  addX = 3
  myFrog = new Frog(275, 475)
  
  for (let carDefined = 0; carDefined < startingCar; carDefined++){//loop for drawing cars
    let carX = random(width);
    let carY = random(rows)
    car.push(new Car(carX, carY))//add the new cars to the empty car list
  }
}

function draw() {
  background(220);
  fill("green")
  rect(0, 0, 500, 50)
  fill("lightblue")
  rect(0, 50, 500, 50)
  rect(0, 100, 500, 50)
  rect(0, 150, 500, 50)
  fill("green")
  rect(0, 200, 500, 50)
  rect(0, 250, 500, 50)
  fill("grey")
  rect(0, 300, 500, 50)
  rect(0, 350, 500, 50)
  rect(0, 400, 500, 50)
  fill("green")
  rect(0, 450, 500, 50)
  
  // myFrog.update();//calling the update function in the frog class
  myFrog.show();//calling the show function in the frog class
  
  for (let carShown = 0; carShown < car.length; carShown++){//draw the foxes in the fox list
    let thisCar = car[carShown]
    thisCar.update();//calling the update function in the car class
    thisCar.show();//calling the show function in the car class
  }
}

class Frog {
  constructor (x, y){//setting up the variables to make them for the class
    this.x = x;
    this.y = y;
  
  }
  update(x, y){//the move function which makes the frog move 
    this.x += x;
    this.y += y;
  }
  show(){
    fill("lightgreen")//makes them green
    // translate(this.x, this.y)
    ellipse(this.x, this.y, 50)//makes the circle the size inputted when the class is called
    
  }
}

class Car {
  constructor(x, y) {//setting up the variables to make them for the class
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  update() {//update the movement of the car
    this.x = this.x + this.addX;
    this.y = this.y;
    // Reverse if it hits a wall.
    let isTooFarLeft = (this.x < 0);
    let isTooFarRight = (this.x > width);
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;//spite changing direction
      
    }
  }
  show() {
    push();
    fill("white")
    ellipse(this.x, this.y, 50)  
    pop();
  }
}

function keyPressed(){
    if (keyCode === UP_ARROW){
      frog.y = frog.y - 50
    }
    if (keyCode === DOWN_ARROW){
      frog.y = frog.y + 50
    }
    if (keyCode === RIGHT_ARROW){
      frog.x = frog.x + 50
    }
    if (keyCode === LEFT_ARROW){
      frog.x = frog.x - 50
    }
}
