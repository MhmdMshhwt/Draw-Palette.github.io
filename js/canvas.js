
//font size 
var Y=document.querySelector("#select");
//canvas
const canvas=document.querySelector("canvas");
const ctx=canvas.getContext('2d');
let isDrawing=false;
var clr; //font color


//// mobile
canvas.addEventListener('touchstart', start);
canvas.addEventListener('touchmove', drow)
canvas.addEventListener('touchend', Stop)

///////// computer
canvas.addEventListener("mousedown",start);
canvas.addEventListener("mousemove",drow)
canvas.addEventListener("mouseup",Stop);
function start(e){
    isDrawing=true;
    drow(e);
}
function drow(e){
    if(!isDrawing) return;
    ctx.lineWidth=Y.value;
    ctx.lineCap="round";
    ctx.strokeStyle=clr;

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    
}
function Stop(){
    isDrawing=false;
    ctx.beginPath();
}
window.addEventListener("resize",resizecanvas);
function resizecanvas(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
}
resizecanvas();

