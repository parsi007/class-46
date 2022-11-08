var canvas, backgroundImage;
var gameState = 0;
var SrNoCount;
var allPlayers;
var distance = 0;
var database;
var loginform, registerform, addquestionform;
var barbie,monster;
var barbie_image, monster_image;
var gameover,gameover_image;

function preload(){
  monster_image = loadImage("../images/capture.png");
  barbie_image = loadImage("../images/happy b.png");
  gameover_image = loadImage("../images/over.png");
}

function setup(){
  canvas = createCanvas(364, 200);
  database = firebase.database();
 addquestionform = new addquestionForm();
 //registerform = new registerForm();
 //loginform = new loginForm();
  //game.getState();
  //game.start();
  addquestionform.display();
  //registerform.display();
}

function draw(){
 // if(playerCount === 4){
 //   game.update(1);
  //}
  //if(gameState === 1){
   // clear();
    //game.play();
 // }
  //if(gameState === 2){
   // game.end();
 // }
}
