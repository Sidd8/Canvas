var mouse_Event="empty";
var last_x,last_y;
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=2;

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouse_Event="mouseDown";
}

canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e){

    mouse_Event="mouseUP";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
   mouse_Event="mouseleave";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){
current_position_x=e.clientX-canvas.offsetLeft;
current_position_y=e.clientY-canvas.offsetTop;

if (mouse_Event=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
console.log("Last position of x and y cordinates are ");
console.log("X= "+last_x+"Y= "+last_y);
ctx.moveTo(last_x,last_y);

console.log("Current position of x and y cordinates are ");
console.log("X= "+current_position_x+"Y= "+current_position_y);
ctx.lineTo(current_position_x,current_position_y);
ctx.stroke();
}
last_x=current_position_x;
last_y=current_position_y;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}