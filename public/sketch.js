document.body.style.margin   = 0
document.body.style.overflow = `hidden`

// let y = -200

// function setup () {
//    createCanvas (innerWidth, innerHeight)
// }

// function draw() {
//    background('#40E0D0');
//    let c = color('pink');
//    fill(c);
//    noStroke();  
//    square(100, y, 200)
//    y = y + 2
   
//    if (y > innerHeight) {
//      y = -200
//    }
//  }

const cnv = document.getElementById ("cnv_id")

cnv.width = innerWidth
cnv.height = innerHeight

console.dir (cnv)

const squuares = []

cnv.onpointerover = e => {
mouse_pos.x = e.x
mouse_pos.y = e.y
}

const ctx = cnv.getContext (`2d`)

cnv.onpointerdown = e => {
  // console.log (`Achivement Unlocked: Interaction`)
  // console.dir (e)
  console.log (e.x, e.y)
  
  squuares.push ({
    x: e.x,
    y: e.y
  })

}

requestAnimationFrame (drawFrame)

function drawFrame () {
  ctx.fillStyle = `turquoise`
  ctx.fillRect (0, 0, cnv. width, cnv.height)

  squuares.forEach (s => {
    s.x += Math.random()*6-3
    s.y += Math.random()*6-3
    ctx.fillStyle = `purple`
    ctx.fillRect (s.x - 50, s.y- 50, 100, 100)
  })

  requestAnimationFrame (drawFrame)


}