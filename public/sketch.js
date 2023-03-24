document.body.style.margin   = 0
document.body.style.overflow = `hidden`

let y = -200

function setup () {
   createCanvas (innerWidth, innerHeight)
}

function draw() {
   background('#40E0D0');
   let c = color('pink');
   fill(c);
   noStroke();  
   square(100, y, 200)
   y = y + 2
   
   if (y > innerHeight) {
     y = -200
   }
 }
