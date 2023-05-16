let sidebarX = innerWidth - innerWidth/10   // Since I use this value a lot, makes it easier to shorten it into a variable
let sidebarY = 2

let myFont;                                 // Define the everything in the preload
let binIcon;
let stampIcon;
let cnv;
let trashCan = [];

let stampText = 'c'                             // Establish the variables for the first stamps, with default values
let ink = 'black'

let options = [];                           // Establish the arrays
let stampArray = [];

let stampCount = 0;
let stampCounter = 1;
let currentStamp;


function preload() {                        // Load in the font
  myFont = loadFont('assets/BodoniOrnaments.ttf'); // The only purpose of the font is to provide an element to 'stamp' to, as text is easier to modify (and find online) than svg files.
  binIcon = loadImage('assets/bin.svg');
  stampIcon = loadImage('assets/stamp.svg')
}

function setup(){
    cnv = createCanvas(innerWidth, innerHeight);
    noFill();

    options[0] = new selector;              // Assign the class to variables within an array
    options[1] = new selector;
    options[2] = new selector;
    options[3] = new selector;
    options[4] = new selector;
    options[5] = new selector;
    options[6] = new selector;
    options[7] = new selector;
    options[8] = new selector;

}

function draw(){

    fill ('white')                  // The main board where the stamps can be applied
    strokeWeight(2)
    rect (0, 0, sidebarX - 10, innerHeight)
    
    options[0].stamps('c')                  // Drawing in the stamp options, with the letters being each of the different stamps
    options[1].stamps('g')
    options[2].stamps('h')
    options[3].stamps('k')

    options[4].colour('green')              // Drawing in the colour options
    options[5].colour('black')
    options[6].colour('red')
    options[7].colour('blue')

    options[8].delete()                     // Drawing in the delete button

 


    if (stampCount > stampCounter){

        textSize (40)

        currentStamp = new currentStamps
        currentStamp.ink = ink
        currentStamp.letter = stampText
        currentStamp.x_pos = mouseX
        currentStamp.y_pos = mouseY
        stampArray.push (currentStamp)
        fill (ink)
        text (stampText, mouseX, mouseY)
        stampCounter = stampCounter + 1

    }
    if (stampArray.lenth != 0){
        for (let i = 0; i < stampArray.length-1; i++) {
            fill (stampArray[i].ink)
            text (stampArray[i].letter, stampArray[i].x_pos, stampArray[i].y_pos)
        }
    }

    noLoop()

}

class selector {                            // The class for the options, aka; where the user can select their options

    constructor(width, x_pos, y_pos){
        this.width = innerWidth/25          // These are the standard box sizes for all of the options
        this.x_pos = sidebarX + 10
        this.y_pos = sidebarY
        sidebarY = sidebarY + innerHeight/10
    }

    stamps(letter){                         // The actual stamp options. Note that the actual 'stamp' is defined from the draw function
    fill ('white')
    rect (this.x_pos, this.y_pos, this.width, this.width, this.width / 4);

     textFont (myFont);
     textSize (this.width-20);
     textAlign(CENTER, CENTER);
     fill('black')
     text (letter, this.x_pos + this.width/2, this.y_pos + this.width/2);
     
    }

    colour(c){                              // The actual colour options. Note that the actual 'colour' is defined from the draw function
        fill (c)                         
        rect (this.x_pos, this.y_pos, this.width, this.width, this.width / 4);

    }

    delete(){                               // The box to delete and restart the stamp page
        fill ('white')
        trashCan [0] = this.x_pos
        trashCan [1] = this.y_pos
        rect (trashCan[0], trashCan[1], this.width, this.width, this.width / 4);
        image (binIcon, this.x_pos+this.width/10, this.y_pos+this.width/10, this.width-10, this.width-10)

    }

}

class currentStamps {

    constructor(){
        this.letter;
        this.ink;
        this.x_pos;
        this.y_pos;
    }
}

function mouseClicked (){
   
    if (mouseX > sidebarX - 30){
        selection()
    }
    else{
        stamper()
    }
}

function selection() {
    if (sidebarX + 10 < mouseX){
        if (mouseX < sidebarX + 10 + innerWidth/25){
            
            if (0 < mouseY){
                if (mouseY < innerWidth/25){
                    stampText = 'c'
                }
            }
            
            if (innerHeight/10 < mouseY){
                if (mouseY < innerHeight/10 + innerWidth/25){
                    stampText = 'g'
                }

            }
            if (innerHeight/10 * 2 < mouseY){
                if (mouseY < innerHeight/10 * 2 + innerWidth/25){
                    stampText = 'h'
                }

            }

            if (innerHeight/10 * 3 < mouseY){
                if (mouseY < innerHeight/10 * 3 + innerWidth/25){
                    stampText = 'k'
                }

            }

            if (innerHeight/10 * 4 < mouseY){
                if (mouseY < innerHeight/10 * 4 + innerWidth/25){
                    ink = 'green'
                }

            }

            if (innerHeight/10 * 5 < mouseY){
                if (mouseY < innerHeight/10 * 5 + innerWidth/25){
                    ink = 'black'
                }

            }

            if (innerHeight/10 * 6 < mouseY){
                if (mouseY < innerHeight/10 * 6 + innerWidth/25){
                    ink = 'red'
                }

            }

            if (innerHeight/10 * 7 < mouseY){
                if (mouseY < innerHeight/10 * 7 + innerWidth/25){
                    ink = 'blue'
                }

            }

            if (innerHeight/10 * 8 < mouseY){
                if (mouseY < innerHeight/10 * 8 + innerWidth/25){
                    stampArray = []
                    loop()


                }

            }

            

    }
    
}
}

function stamper() {

    stampCount = stampCount + 1
    loop()
}

