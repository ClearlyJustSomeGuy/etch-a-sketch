let columns = 25;

// Draw the grid layout
function drawGrid(columns) {
    //Remove existing grid-item divs
    let existingSquares = document.querySelectorAll('.grid-item');
    existingSquares.forEach((existingSquare) => {
        existingSquare.remove();
    });
    const gridCont = document.querySelector(".grid-container");

    // Adjust adjust # of columns
    gridCont.style.cssText = 'grid-template-columns: repeat(' + columns + ', auto);'

    //Insert columns^2 number of divs into .grid-container
    for (let i = 0; i < columns * columns; i++) {
        const square = document.createElement('div');
        square.classList = 'grid-item';
        gridCont.appendChild(square);
    }
}

function resetGrid() {
    const grids = document.querySelectorAll(".grid-item");
    grids.forEach((box) => {
        // box.classList.remove('dark');
        box.style.background = '';
        box.style.opacity = 0;
        box.removeAttribute('style');
    })
}

function getRandomColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`
}

// Set grid items to black or color when mouseover
function draw(){
    const grids = document.querySelectorAll(".grid-item");
    grids.forEach((box) => {
        box.addEventListener('mouseover', (e) => {
            if (e.buttons === 1 && !colorCheckbox.checked) {
                if (box.style.background != 'black') {
                    box.style.background = 'black';
                    box.style.opacity = 0.2;
                }
                else {
                    let itemOpacity = box.style.opacity;
                    itemOpacity = parseFloat(itemOpacity);
                    itemOpacity += 0.2;
                    box.style.opacity = itemOpacity;
                }
            } else if (e.buttons === 1 && colorCheckbox.checked) {
                box.removeAttribute('style');
                box.style.background = getRandomColor();
            }
        })
    })
}

// Var definition for colors checkbox
let colorCheckbox = document.querySelector('#colors');

// Reset grid items color when reset clicked
const reset = document.querySelector("#reset");
reset.addEventListener('click', resetGrid);

//Prompt user for column width, update html and restart sketch function
let ucolumns = document.querySelector('#ucolumns');
ucolumns.addEventListener('click', () => {
    columns = prompt("Please enter the number of columns you would like", 50);
    
    while (isNaN(columns) || columns < 1 || columns > 100) {
        columns = prompt("Keep it between 1 and 100, please");
    }

    columns = Math.floor(columns);
    drawGrid(columns);
    draw();
})


drawGrid(columns);
draw();