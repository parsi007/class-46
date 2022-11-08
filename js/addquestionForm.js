 class addquestionForm {

   constructor() {
    this.input = createInput("Grade");
    this.input1 = createInput("Level");
    this.input2 = createInput("Question");
    this.input3 = createInput("Answer");
    this.addbutton = createButton("Add");
    this.addedinfo = createElement("h2");
    this.SrNo = 0;
      this.grade = 2;
      this.level= "Easy";
      this.question="";
      this.answer="";
 }

  display(){
    
    this.input.position(100,35);
    this.input1.position(100, 60);
    this.input2.position(100 , 85);
    this.input3.position(100 ,110);
    this.addbutton.position(100,140);  

this.addbutton.mousePressed(()=>{
  this.grade = this.input.value();
  this.level = this.input1.value();
  this.question = this.input2.value();
  this.answer = this.input3.value();
  SrNoCount+=1;
  this.Srno = SrNoCount;
  this.update(SrNoCount, this.grade,this.level, this.question,this.answer);
this.addedinfo.html("added Question answer")
this.addedinfo.position(displayWidth/2 - 70, displayHeight/4);
 // this.update();
 
});

  }
  

  update(SrNoCount, grade,level,question,answer){
    var Index = "QuestionAnswer/Question" + Question;
    database.ref(Index).set({
      Grade:grade,
      Level:level,
      Question:question,
      Answer:answer,
      Srno:SrNoCount

    });
  
}
 }
