let sidebarX = innerWidth - innerWidth/10   // Since I use this value a lot, makes it easier to shorten it into a variable
let sidebarY = 2
let boardBackground = 'white'               // Initialise the background for the board
let myFont;                                 // Define the font variable

let options = [];


function preload() {                        // Load in the font
  myFont = loadFont('BodoniOrnaments.ttf'); // The only purpose of the font is to provide an element to 'stamp' to, as text is easier to modify (and find online) than svg files.
}

function setup(){
    createCanvas(innerWidth, innerHeight);
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
    options[9] = new selector;
}

function draw(){

    fill (boardBackground)                  // The main board where the stamps can be applied
    strokeWeight(2)
    rect (0, 0, sidebarX - 10, innerHeight)

    
    options[0].stamps('c')                  // Drawing in the stamp options, with the letters being each of the different stamps
    options[1].stamps('g')
    options[2].stamps('h')
    options[3].stamps('k')

    options[4].colour('white')              // Drawing in the colour options
    options[5].colour('green')
    options[6].colour('red')
    options[7].colour('blue')

    options[8].refill()                     // Drawing in the refill button

    options[9].delete()                     // Drawing in the delete button

}

class selector {                            // The class for the options, aka; where the user can select their options

    constructor(width, x_pos, y_pos){
        this.width = innerWidth/25          // These are the standard box sizes for all of the options
        this.x_pos = sidebarX + 10
        this.y_pos = sidebarY
        sidebarY = sidebarY + innerHeight/10
    }

    stamps(letter){                         // The actual stamp options. Note that the actual 'stamp' is defined from the draw function
        textFont (myFont);
        textSize (this.width-18);
        fill('black')
        text (letter, this.x_pos, this.y_pos);
        

        rect (this.x_pos, this.y_pos, this.width, this.width, this.width / 4);


    }

    colour(c){                              // The actual colour options. Note that the actual 'colour' is defined from the draw function
        rect (this.x_pos, this.y_pos, this.width, this.width, this.width / 4);
        fill (c)
    }

    refill(){
        rect (this.x_pos, this.y_pos, this.width, this.width, this.width / 4);
    }

    delete(){
        rect (this.x_pos, this.y_pos, this.width, this.width, this.width / 4);

    }

}