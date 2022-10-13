// let gridCount = 16;

// let divContainer = document.querySelector('.grid-container');

// //create divs based on the grid count
// for(let i = 0; i < gridCount; i++)
// {
//     const div = document.createElement('div');
//     // div.textContent = "Hello";
//     divContainer.appendChild(div);
// }

// 
// FLOAT/CLEAR start
// 

//setup gridcount, grab container
let gridCount = 16;//4*4 = 16
let divGridContainer = document.querySelector('.grid-container');

for(let i = 1; i <= gridCount; i++)
{
    const startDiv = document.createElement('div');
    startDiv.classList.toggle('grid-square');
    startDiv.classList.toggle('start');
    divGridContainer.appendChild(startDiv);
    for(let i = 2; i <= gridCount; i++)
    {
        const div = document.createElement('div');
        div.classList.toggle('grid-square');
        divGridContainer.appendChild(div);
    }
}

const gridSquares = document.querySelectorAll('.grid-square');

gridSquares.forEach((square) => {

    square.addEventListener('mouseover', () => {

        square.classList.toggle('hovered');
        
    });

});
// 
// FLOAT/CLEAR end
// 

// 
// FLEX
// 

// 
// 

// 
// INLINE/BLOCK
// 

// 
// 

// 
// CSS GRID
// 

// 
// 