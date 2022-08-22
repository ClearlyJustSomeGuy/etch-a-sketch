let columns = 15;

let ucolumns = document.querySelector('#ucolumns');
ucolumns.addEventListener('click', () => {
    columns = prompt("Please enter the number of columns you would like", 50);
    
    while (isNaN(columns) || columns < 1 || columns > 100) {
        columns = prompt("Keep it between 1 and 100, please");
    }

    columns = Math.floor(columns);
    drawGrid(columns);
    runSketch();
})


function drawGrid(columns) {
    const gridCont = document.querySelector(".grid-container");

    // Adjust adjust # of columns
    gridCont.style.cssText = 'grid-template-columns: repeat(' + columns + ', auto);'

    //Remove existing grid-item divs
    let existingSquares = document.querySelectorAll('.grid-item');
    existingSquares.forEach((existingSquare) => {
        existingSquare.remove();
    });

    //Insert columns^2 number of divs into .grid-container
    for (let i = 0; i < columns * columns; i++) {
        const square = document.createElement('div');
        square.classList = 'grid-item';
        gridCont.appendChild(square);
    }
}

drawGrid(columns);

function runSketch() {
    // Set grid items to black when mouseover
    const grids = document.querySelectorAll(".grid-item");
    grids.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.classList.add('dark');
        })
    })

    // Reset grid items color when reset clicked
    const reset = document.querySelector("#reset");
    reset.addEventListener('click', () => {
        grids.forEach((box) => {
            box.classList.remove('dark');
        })
    })
}

runSketch();