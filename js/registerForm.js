class registerForm {
  constructor(){
    this.input= createInput('username');
    this.input1 = createInput('password');
    this.button = createButton("create account");
  }
  hide(){
    //this.input5.hide();
    //this.input6.hide();
   // this.greeting.hide();
    //this.title.hide();
    //this.button.hide();
  }

display(){

  this.input.position(100,35);
  this.input1.position(100,60);
  this.button.position(100,85);
  
  this.button.mousePressed(()=>{
    this.input.hide();
    this.input1.hide();
    this.button.hide();
    //loginform.display();
   // player.name = this.input.value();
    //playerCount+=1;
    //player.index = playerCount;
    //player.update();
   // player.updateCount(playerCount);
   // this.greeting.html("Hello " + player.name)
   // this.greeting.position(displayWidth/2 - 70, displayHeight/4);
  
});


}
}
