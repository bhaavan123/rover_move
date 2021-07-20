canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");

rover_height=100;
rover_width=100;

rover_x=10;
rover_y=10;

nasa_img_array=["nasa_1.jpg","nasa_2.jpg","nasa_3.jpg","nasa_4.jpg","nasa_5.jpg","nasa_6.jpg","nasa_7.jpg","nasa_8.jpg"];
random_number=Math.floor(Math.random()*8);
background_image=nasa_img_array[random_number];
rover_image="rover.png";

function add() {
background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_image;

rover_imgtag=new Image();
rover_imgtag.onload=uploadRover;
rover_imgtag.src=rover_image;

}

 function uploadBackground(){
     ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
 }

 function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
 }

 window.addEventListener("keydown",my_keydown);
 
 function my_keydown(e){
 keypressed=e.keyCode;
 console.log(keypressed);

 if(keypressed=="38")
 {
     up();
     console.log("up");
 }
 if(keypressed=="37")
 {
     left();
     console.log("left");
 }
 if(keypressed=="40")
 {
     down();
     console.log("down");
 }
 if(keypressed=="39")
 {
    right();
     console.log("right");
 }
 }
 
 function up(){
    
    if(rover_y > 0){
rover_y=rover_y-10;
 uploadBackground();
uploadRover();}

}

function down(){
    
    if(rover_y < 500){
rover_y=rover_y+10;
 uploadBackground();
uploadRover();}

}

function left(){
    
    if(rover_x > 0){
rover_x=rover_x-10;
 uploadBackground();
uploadRover();}
}

function right(){
    
    if(rover_x < 800){
rover_x=rover_x+10;
 uploadBackground();
uploadRover();}
}

