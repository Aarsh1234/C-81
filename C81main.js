canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="aqua";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(400, 200, 80, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    console.log(color);
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("x=  "+mouse_x+" ,y=  "+mouse_y);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(mouse_x, mouse_y, 80, 0, 2*Math.PI);
ctx.stroke();
}