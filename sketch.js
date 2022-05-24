const CONTAINER = document.querySelector("#container");
const CLEAR_BTN = document.querySelector("#clear");
let mouseisDown = false;

// Makes a grid of 16x16 divs

makeGrid(16);
paint();


// Generates rng for rainbow color
function randomColor(){
    return Math.floor(Math.random()*256);
}

// Makes a grid with square divs whose size depends on the number of rows and the size of the container
function makeGrid(rows){
    let cellS = CONTAINER.clientHeight/rows;

    for(let i=0; i<rows*rows;i++){
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.style.height = `${cellS}px`;
        cell.style.width = `${cellS}px`;
        container.appendChild(cell);
    }
}

// Checks if LMB is pressed
document.addEventListener("mousedown", ()=> mouseisDown = true)
document.addEventListener("mouseup", ()=> mouseisDown = false)

// Changes divs background color when LMB is pressed and mouse moves over them
function paint(){
    document.querySelectorAll(".grid-item").forEach( item => {
        item.addEventListener('mousemove', () => {
            if(mouseisDown){
                if(document.getElementById("rainbow").checked === true){
                    item.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
                } else {
                    item.style.backgroundColor = document.getElementById("color").value;
                }
            }
        })
    })
}


// Clears current canvas and creates a new one
CLEAR_BTN.addEventListener("click", () => {
    let x;
    do {
        x = prompt("Choose a size between 1 and 100",16)
    } while(x>100 || x<1 || isNaN(x))
    document.querySelectorAll(".grid-item").forEach(item => item.remove());
    makeGrid(x);
    paint();
}
)