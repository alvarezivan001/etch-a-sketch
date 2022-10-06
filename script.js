
let gridCount = 4;
let gridRight = 16;
let gridDown = 16;

let divContainer = document.querySelector('.container');

//create divs based on the grid count
for(let i = 0; i < (gridCount*gridCount); i++)
{
    const div = document.createElement('div');
    // div.textContent = "Hello";
    divContainer.appendChild(div);
}