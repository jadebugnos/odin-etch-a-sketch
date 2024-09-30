const parentBox = document.querySelector('#box-container');
let numberofBoxes = 16 * 16;
const originalChild = document.createElement('div');
originalChild.classList.add('boxes');
const toCovert = input => (100 / +input) + '%'; // converts human input into a percentage.
let columns = "";
let rows = "";


function getUserInput(event) {
    event.preventDefault();
    columns = document.getElementById('columns').value;
    rows = document.getElementById('rows').value;
    parentBox.replaceChildren();

    if (columns > 100 ||
        rows > 100 ||
        columns <= 0 ||
        rows <= 0 ||
        isNaN(columns) ||
        isNaN(rows)) {
        alert("invalid input! only accepts values between 1 to 100 positive numbers.")
        numberofBoxes = 16 * 16;
    } else {
        numberofBoxes = columns * rows;
    }

    multiplyBox(numberofBoxes);
    [...parentBox.children].forEach(box => {
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


parentBox.addEventListener('mouseover', e => {
    if (e.target !== e.currentTarget) {
        e.target.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }

    setTimeout(() => {
        e.target.style.backgroundColor = "transparent";
    }, 2000);
});


multiplyBox(numberofBoxes);
