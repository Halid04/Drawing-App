let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")
let rightSide = document.getElementById("rightSide");
let colorSelector = document.getElementById("colorSelector");
let widthSelector = document.getElementById("widthSelector");
let clearBtn = document.getElementById("clearBtn");
let painting = false;

function canvasSize(){
    canvas.height = rightSide.offsetHeight;
    canvas.width = rightSide.offsetWidth;
}

canvasSize()

let lineColor = "#000000"
colorSelector.addEventListener("change", ()=>{
    lineColor = colorSelector.value;
})

widthSelector.value = 5;
let lineWidth = widthSelector.value;
widthSelector.addEventListener("change", ()=>{
    if(widthSelector.value>0){
        lineWidth = widthSelector.value;
    }
    
})

clearBtn.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})


window.addEventListener("resize", ()=>{
    canvasSize()
})

rightSide.addEventListener("mousedown", ()=>{
    painting = true;
    ctx.beginPath();
})

rightSide.addEventListener("mouseup", ()=>{
    painting = false;
})

rightSide.addEventListener("mouseleave", ()=>{
    painting = false;
})

rightSide.addEventListener("mousemove", function drawing(e){
    if(painting == true){
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
})