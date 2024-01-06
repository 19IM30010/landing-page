const container = document.getElementById('container');
const button = document.querySelector('button');

let black = 1;
let rainbow = 0;
let resetsize=16;
const blac = document.querySelector('.black');

blac.addEventListener('click',()=>{
    black=1;
    rainbow=0;
});

const rain = document.querySelector('.rainbow');

rain.addEventListener('click',()=>{
    black=0;
    rainbow=1;
});
const clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    createGrid(resetsize);
});





function createGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        // square.style.width = 
        const sz = Math.floor(960/size);
        square.style.width=`${sz}px`;
        square.style.height=`${sz}px`;
        container.appendChild(square);
    }
    let resz=(Math.floor(960/size) +2)*size;
    container.style.height=`${resz}px`;
    container.style.width=`${resz}px`;
    // container.style.gridTemplateColumns = `repeat(${size}, 60px)`;
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if(black===1){

                square.style.backgroundColor = 'black';

            }
            else if(rainbow===1){
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
            
        });
    });

}

function changeGridSize() {
    let newSize = prompt('Enter the number of squares per side (max 100):');
    // Validate user input
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }

    resetsize=newSize;
    createGrid(newSize);

}

createGrid(16);


