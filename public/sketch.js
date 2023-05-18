let sidebarX = innerWidth - innerWidth/10   // Since I use this value a lot, makes it easier to shorten it into a variable
let sidebarY = 2

let myFont;                                 // Define the everything in the preload
let binIcon;
let stampIcon;
let cnv;
let trashCan = [];

let stampText = 'c'                         // Establish the variables for the first stamps, with default values
let ink = 'black'

let options = [];                           // Establish the arrays
let stampArray = [];

let stampCount = 0;                         // Establish variables used to allow the stamps to trigger
let stampCounter = 1;
let currentStamp;


function preload() {                        // Load in the font
  myFont = loadFont('assets/BodoniOrnaments.ttf'); // The only purpose of the font is to provide an element to 'stamp' to, as text is easier to modify (and find online) than svg files.
  binIcon = loadImage('assets/bin.svg');
}

function setup(){
    cnv = createCanvas(innerWidth, innerHeight);
    noFill();

    options[0] = new selector;              // Assign the class to variables within an array. Note that these are for the options, as there will only be up to 9 options to select, and the array will not need to increase in size.
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

    fill ('white')                          // The main board where the stamps can be applied
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


    if (stampCount > stampCounter){         // This is through functions that are below, that gets activated when the mouse is pressed within the 'stamp' area

        textSize (40)                       // The text size will always remain the same, so it doesn't need to be part of the stamp array

        currentStamp = new currentStamps    // Each time a stamp is made, it needs to first of all go into a class, and then stored within an array. This step here, places all of the variables for the stamp made into the class.
        currentStamp.ink = ink
        currentStamp.letter = stampText
        currentStamp.x_pos = mouseX
        currentStamp.y_pos = mouseY
        stampArray.push (currentStamp)      // This line pushes the class data into the array so that it can be stored
        fill (ink)                          // Although the data has been stored, the stamp that has been just made doesn't actual print, so these two lines just does that.
        text (stampText, mouseX, mouseY)
        stampCounter = stampCounter + 1     // This then ends the drawing step, so it doesn't repeat more than it has to.

    }
    if (stampArray.lenth != 0){             // This then prints all the data from the array, first of all making sure that there actually is data in said array.
        for (let i = 0; i < stampArray.length-1; i++) {
            fill (stampArray[i].ink)
            text (stampArray[i].letter, stampArray[i].x_pos, stampArray[i].y_pos)
        }
    }

    noLoop()                                // I ran into some issues with the stamps disappearing if the draw continuously looped, so this was just preventing that. Plus, it helps minimise the program to overload.

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
     textSize (this.width-28);
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

class currentStamps {                       // The class for storing the all the stamps currently displayed. Because the class is just converting data, it just needs the local variables.

    constructor(){
        this.letter;
        this.ink;
        this.x_pos;
        this.y_pos;
    }
}

function mouseClicked (){                   // This function will detect if the mouse is in the selection area or the stamp area, and will then assign it to the relevant function.
   
    if (mouseX > sidebarX - 30){
        selection()
    }
    else{
        stamper()
    }
}

function selection() {                  // This is all the selection options. Just to note, for some reason, I had some trouble having the && section of the if statements triggering, as well as the statement to trigger between the two variables, so I had to do it all as separate if statements. 
    if (sidebarX + 10 < mouseX){
        if (mouseX < sidebarX + 10 + innerWidth/25){
            
            if (0 < mouseY){                    // Stamp option 1
                if (mouseY < innerWidth/25){
                    stampText = 'c'
                }
            }
            
            if (innerHeight/10 < mouseY){       // Stamp option 2
                if (mouseY < innerHeight/10 + innerWidth/25){
                    stampText = 'g'
                }

            }

            if (innerHeight/10 * 2 < mouseY){   // Stamp option 3
                if (mouseY < innerHeight/10 * 2 + innerWidth/25){
                    stampText = 'h'
                }
            }

            if (innerHeight/10 * 3 < mouseY){   // Stamp option 4
                if (mouseY < innerHeight/10 * 3 + innerWidth/25){
                    stampText = 'k'
                }
            }

            if (innerHeight/10 * 4 < mouseY){   // Colour option 1
                if (mouseY < innerHeight/10 * 4 + innerWidth/25){
                    ink = 'green'
                }
            }

            if (innerHeight/10 * 5 < mouseY){   // Colour option 2
                if (mouseY < innerHeight/10 * 5 + innerWidth/25){
                    ink = 'black'
                }
            }

            if (innerHeight/10 * 6 < mouseY){   // Colour option 3
                if (mouseY < innerHeight/10 * 6 + innerWidth/25){
                    ink = 'red'
                }
            }

            if (innerHeight/10 * 7 < mouseY){   // Colour option 4
                if (mouseY < innerHeight/10 * 7 + innerWidth/25){
                    ink = 'blue'
                }
            }

            if (innerHeight/10 * 8 < mouseY){   // Delete option
                if (mouseY < innerHeight/10 * 8 + innerWidth/25){
                    stampArray = []         // To delete the array, just simply clear it!
                    loop()                  // Any time the stamp area is modified, we just need the draw function to run, and by starting up the loop again, we can do so.
                }
            }
    }
    
}
}

function stamper() {

    stampCount = stampCount + 1         // This then initialises the stamp if statement in the draw statement, 
    loop()                              // and allows the draw to actually run.
}