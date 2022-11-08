class loginForm {
  constructor(){
   // this.index = null;
    //this.distance = 0;
    //this.name = null;
    
    this.input = createInput('username');
    this.input1 = createInput('Password');
    this.input2 = createInput('standard');
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    //this.button.hide();
    //this.input.hide();
    //this.input1.hide();
  }
  
  display(){
   this.input.position(100,35);
  this.input1.position(100,60);
  this.button.position(100,110);
  this.input2.position(100,85);

  this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
   // this.greeting.html("Hello " + this.input);
    //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
   //addquestionform.display();
 
  });
  //barbie = createSprite(100,85);
  //barbie.addImage("barbie",barbie_image);
  }
 
 
 
 
 
  // getCount(){
   // var playerCountRef = database.ref('playerCount');
   // playerCountRef.on("value",(data)=>{
     // playerCount = data.val();
   // })
 // }

 // updateCount(count){
    //database.ref('/').update({
    //  playerCount: count
   // });
 // }

  //update(){
   // var playerIndex = "players/player" + this.index;
    //database.ref(playerIndex).set({
    //  name:this.name,
     // distance:this.distance
   // });
 // }

  //static getPlayerInfo(){
    //var playerInfoRef = database.ref('players');
    //playerInfoRef.on("value",(data)=>{
     // allPlayers = data.val();
   // })
  //}
}
