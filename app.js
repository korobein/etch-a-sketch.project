const container = document.getElementById("container");
const btn = document.getElementById("clear");
let mouseisDown = false

// Default grid
makeGrid(16, 16);

// Generates random number for rgb when rainbow is on
function randomColor (){
    let rngColor = Math.floor(Math.random()*256)
    return rngColor;
}

// Creates a grid of square divs, calculating their size relative to the container and the number of rows and columns.
function makeGrid (rows, cols) {
    let cellS = container.clientHeight/rows;
    
    for (let r=0; r < cols*rows; r++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-item');
        cell.style.height=`${cellS}px`;
        cell.style.width=`${cellS}px`;
        container.appendChild(cell);
    }
}
// Used this to try to combine events. It tells if mouse button is down, and then uses that info on paintGrid
document.addEventListener('mousedown', () => mouseisDown = true);
document.addEventListener('mouseup', () => mouseisDown = false);

// Changes cells color when mouse moves over cell.
function paintGrid (){
    Array.from(document.querySelectorAll(".grid-item")).forEach((item) => { item.addEventListener('mousemove', () =>{
        if (mouseisDown){
            if (document.getElementById("rainbow").checked === true) {
                item.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
            } else {
                item.style.backgroundColor = document.getElementById("color").value
            }   
        }  
    })
        
    })
}

paintGrid();

// When user presses clear and new button, clears actual canvas and asks for new div size
btn.addEventListener('click', () => {
    let x 
    do {
        x = prompt("Select a size between 1 and 100", 16)
    } while (x>100 || isNaN(x))
    document.querySelectorAll('.grid-item').forEach(e => e.remove());
    makeGrid(x,x);
    paintGrid();
})

