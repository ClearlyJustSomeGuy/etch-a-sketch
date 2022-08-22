let columns = 15;
console.log(typeof columns);

let ucolumns = document.querySelector('#ucolumns');
ucolumns.addEventListener('click', () => {
    columns = prompt("Please enter the number of columns you would like", 50);
    
    while (typeof columns !== 'number' || columns < 1 || columns > 100) {
        columns = prompt("Keep it between 1 and 100, please");
    }
})


let pixels = columns * columns;

const gridCont = document.querySelector(".grid-container");

// Manually adjust grid # of columns
gridCont.style.cssText = 'grid-template-columns: repeat(' + columns + ', auto);'

//Insert columns^2 number of divs into .grid-container
for (let i = 0; i < pixels; i++) {
    const square = document.createElement('div');
    square.classList = 'grid-item';
    gridCont.appendChild(square);
}

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