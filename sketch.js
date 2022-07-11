var Box1,Box2

function setup() 
{
  createCanvas(400, 400);
  Box1 = new Box(100,100,40,40);
  Box2 = new Box(200,250,20,20);
}

function draw() 
{
  background(220);
  Box1.show();
  Box1.set_speed(2);
  Box2.show();
  Box2.set_speed(2);
  Box1.set_width(10);
}

