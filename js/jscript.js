let columns = 10;

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

// Manually adjust grid # of columns
const gridCont = document.querySelector(".grid-container");
gridCont.style.cssText = 'grid-template-columns: repeat(' + columns + ', auto);';

//Insert columns^2 number of divs into .grid-container