

var text = document.getElementById("text");
var header = document.getElementById("header");

var left = document.getElementById("hill-left");
var right = document.getElementById("hill-right");
var sun = document.getElementById("sun");
var family = document.getElementById("family");
var house = document.getElementById("house");


window.addEventListener('scroll',function()
{
    const scrolled = this.window.scrollY;
    const scrollable = document.documentElement.scrollHeight - this.window.innerHeight;
    console.log(scrollable);



    let value = window.scrollY;
  
    text.style.top =38.4 + value * -0.04 + '%';
    left.style.top = 65+value * 1 + 'px';
    left.style.left = -160+value * -0.5 + 'px';
    right.style.top = 40 +value * 1 + 'px';
    right.style.left = 590+value * 0.5 + 'px';
    header.style.top = value *0.5 + 'px';
    sun.style.bottom =180 +value * 2 + 'px';
    sun.style.left = 40 + value * 4 + 'px';
    clouds.style.right = 100 + value * 3 + 'px';
    clouds.style.top = 75 + value * 0.5 + 'px';
    family.style.top = 548 + value * -0.04 + 'px';
    house.style.top = 330 + value * -0.15 + 'px';
   
    

});

