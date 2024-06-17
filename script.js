

const paint = document.querySelector(".paint")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#menos")
const number = document.querySelector("#number")
const close = document.querySelector("#close")
const context = paint.getContext('2d')

let drawning = false

paint.addEventListener("mousedown", (event) => {
    drawning = true
    context.beginPath()
    context.moveTo(event.offsetX,event.offsetY)
    context.lineTo(event.offsetX,event.offsetY)
    context.lineWidth = parseInt(number.innerHTML)
    context.strokeStyle = "Black"



})
paint.addEventListener("mousemove", (event => {
    if(drawning === true){
        context.lineTo(event.offsetX,event.offsetY)
        context.stroke()
    }
   
}))

paint.addEventListener("mouseup", () => {
    drawning = false
    context.closePath()
})
close.addEventListener("click", () => {
    context.clearRect(0,0,paint.width,paint.height)
})
plus.addEventListener("click", () => {
    const value = number.textContent
    console.log(value)
    const nummberValue = parseInt(value)
    if( nummberValue <=45){
        number.innerHTML = nummberValue + 5
    }
})


minus.addEventListener("click", () => {
    const value = number.textContent
    const nummberValue = parseInt(value)
    if( nummberValue > 6){
        number.innerHTML = nummberValue - 5
    }
    
})