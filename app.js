const container = document.getElementById("container");
const btn = document.getElementById("clear");
makeGrid(16, 16);

function randomColor (){
    let rngColor = Math.floor(Math.random()*256)
    return rngColor;
}

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


function paintGrid (){
    Array.from(document.getElementsByClassName("grid-item")).forEach((item) => { item.addEventListener('mouseover', () =>{
        if (document.getElementById("rainbow").checked === true) {
            item.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
        } else {
            item.style.backgroundColor = document.getElementById("color").value
        }
    })
        
    })
}

paintGrid();

btn.addEventListener('click', () => {
    Array.from(document.getElementsByClassName("grid-item")).forEach(item => item.style.backgroundColor = "white");
    let x 
    do {
        x = prompt("Select a size between 1 and 100", 16)
    } while (x>100)
    document.querySelectorAll('.grid-item').forEach(e => e.remove());
    makeGrid(x,x);
    paintGrid();
})
