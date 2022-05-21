
let closeSideBar = document.getElementById("close1");
let colorsList = document.querySelectorAll('.color');
let bars = document.querySelector('.bars');
let pallette = document.querySelector('.palette');
let colorsParent = document.querySelector('.colors');
// my used colors
var colors = ["black","silver","red","maroon","yellow","olive","lime","green","aqua","teal","blue","navy","fuchsia","purple"];


window.onload = function () {
    // generate color palette
    for (let i = 0; i < colors.length; i++){
        let color = document.createElement('div');
        color.setAttribute('id', colors[i]);
        color.classList.add('color');
        color.style.backgroundColor = colors[i];
        colorsParent.appendChild(color);

        //start picking color
        color.onclick = function () {
            clr = this.style.backgroundColor;
    
            let siblings = this.parentElement.children;

            for (let i = 0; i < siblings.length; i++){
                siblings[i].classList.remove('active');
                this.classList.add('active');
            }        
        }
        
    }
    
    
}




//open the drawing Board
var drow = document.getElementById("button");
drow.onclick = function(){
    document.getElementById("drawingBoard").style.display = "block";
    hideSideBar();
}

//close the drawing Board
var close = document.getElementById("close");
close.onclick = function(){
    document.getElementById("drawingBoard").style.display = "none";
    showSideBar();
}

// change head color
var h2 = document.getElementsByTagName("h2");
let h = 2;
function h2ColorChange() {
    if (h == 2) {
        h2[0].style.color = colors[colors.length-h];
        h = 1;
    }
    else {
        h2[0].style.color = colors[colors.length-h];
        h = 2;
    }
    
    
    setTimeout("h2ColorChange()",1000);
}
h2ColorChange();


closeSideBar.addEventListener('click', hideSideBar);
function hideSideBar() {
    pallette.style.transform = 'translateX(-100%)';    
}

bars.addEventListener('click', showSideBar);
function showSideBar() {
    pallette.style.transform = 'translateX(0)';    
}













/*we will start drawing on the drawing board
var circle= document.getElementById("circle");
drawing.onmousemove = animateCircle;
function animateCircle(event){
    var circle = document.getElementById("circle");
    circle.style.left=event.clientX + 'px';
    circle.style.top=event.clientY + 'px';
}*/

//start her


