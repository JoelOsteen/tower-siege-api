class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
     // this.image = loadImage("pictures/wood1.png");
      this.visibility=255
    }



  display(){
    if(this.body.speed<3){
     super.display();
     }
   else{
     World.remove(world,this.body);
     push()
     tint(255,this.visibility);
     this.visibility=this.visibility-5;
     pop()
   }
   }

   score(){
     if(this.visibility>0 && this.visibility<150){
       score++;
     }
   }
  }; 