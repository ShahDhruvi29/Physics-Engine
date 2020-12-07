// NameSpacing || Shortcuts
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world, object,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world; 

    var options = {
        isStatic: true
    }
    
    object = Bodies.rectangle(200, 380, 600, 20, options);
    World.add (world, object);

    console.log (object);
    console.log (object.position.x);
    console.log (object.position.y);
    var ballOptions={
        restitution: 1.0
    }
    ball=Bodies.circle(200,120,23,ballOptions)
    World.add(world,ball)
}

function draw(){
    background("black");
    Engine.update(engine);
    rectMode (CENTER);
    rect (object.position.x, object.position.y, 600, 20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,23)
    
}