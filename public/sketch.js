document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv = document.getElementById (`example_canvas`)
cnv.style.background = "turquoise"

const ctx = cnv.getContext (`2d`)

resize_canvas ()

window.onresize = resize_canvas

let y_pos = cnv.height / 2 - 50

requestAnimationFrame (draw_frame)

function draw_frame () {
   ctx.fillStyle = `black`
   ctx.fillRect (0, 0, cnv.width, cnv.height)

   ctx.fillStyle = `white`
   ctx.fillRect (150, y_pos, 100, 100)
   

   // y_pos += 0.005

   // if (y_pos > cnv.width) {
   //    y_pos = 0
   // }

   requestAnimationFrame (draw_frame)
}

function mouse (){


}

function resize_canvas () {
   cnv.width  = innerWidth
   cnv.height = innerHeight   
}