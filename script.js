const parentBox = document.querySelector('#box-container');
let numberofBoxes = 16 * 16;
const originalChild = document.createElement('div');
originalChild.classList.add('boxes');

let columns = "";
let rows = "";

// converts human input into a value to be added to the grid length rows/column;
const toCovert = input => (100 / +input) + '%';



function getUserInput(event) {
    event.preventDefault();

    columns = document.getElementById('columns').value;
    rows = document.getElementById('rows').value;
    numberofBoxes = columns * rows;
    multiplyBox(numberofBoxes);
    console.log(numberofBoxes);
   
    [...parentBox].forEach(box => {
        box.style.height = toCovert(columns);
        box.style.width = toCovert(rows);
    })
}

document.getElementById('user-input').addEventListener('submit', getUserInput);





function multiplyBox(boxes) {
    for (let i = 1; i <= boxes; i++) {
        let clones = originalChild.cloneNode(true);
        clones.classList.add('boxes');
        parentBox.appendChild(clones);
    }
}

multiplyBox(numberofBoxes);

parentBox.addEventListener('mouseover', e => {
    if (e.target !== e.currentTarget) {
        e.target.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }

    setTimeout(() => {
        e.target.style.backgroundColor = "transparent";
    }, 2000);
});



