const parentBox = document.querySelector('#box-container');
let numberofBoxes = 30 * 20;
const originalChild = document.createElement('div');
originalChild.classList.add('boxes');

// converts human input into a percentage.
const toCovert = input => (100 / +input) + '%';
let columns = "";
let rows = "";

// gets valid human input only accepts 1 to 100 positive intigers
function getUserInput(event) {
    event.preventDefault();
    columns = document.getElementById('columns').value;
    rows = document.getElementById('rows').value;
    parentBox.replaceChildren();

    let validate = validateInput(columns, rows);

    if (!validate) {
        alert("invalid input! needs both values and only accepts positive numbers between 1 and 100.");
        columns = 26;
        rows = 16;
        numberofBoxes = columns * rows;
    } else {
        numberofBoxes = columns * rows;
    }

    multiplyBox(numberofBoxes);
    //sets the new sizes of the box to prevent overflow
    [...parentBox.children].forEach(box => {
        box.style.width = toCovert(columns);
        box.style.height = toCovert(rows);
    })
}

//validates human input
function validateInput(columns, rows) {
    if (columns > 100 || rows > 100 || columns <= 0 || rows <= 0 || isNaN(columns) || isNaN(rows)) {
        return false;
    } else {
        return true;
    }
}

document.getElementById('user-input').addEventListener('submit', getUserInput);

//creates and add the divs into the parent element
function multiplyBox(boxes) {
    for (let i = 1; i <= boxes; i++) {
        let clones = originalChild.cloneNode(true);
        clones.classList.add('boxes');
        parentBox.appendChild(clones);
    }
}


//changes the divs to a random color when hovered
parentBox.addEventListener('mouseover', getColors);


const effectsArr = {

    get rainbow() {
        return '#' + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, '0');
    },

    get effectOne() {
        [...parentBox.children].forEach(box => {
            box.classList.add = "effect";
        })
    }
};


function getEffects() {
    const effectChoice = document.getElementById('effects').value;

}

function getColors(e) {
    const userChoice = document.querySelector('#colors').value;
    const effectChoice = document.getElementById('effects').value;

    if (e.target !== e.currentTarget && userChoice) e.target.style.backgroundColor = userChoice;

    if (e.target !== e.currentTarget && effectChoice) e.target.style.backgroundColor = effectsArr.rainbow;

}


function startDefault(column, row) {
    columns = column;
    rows = row;
    numberofBoxes = columns * row;
    multiplyBox(numberofBoxes);

    [...parentBox.children].forEach(box => {
        box.style.width = toCovert(columns);
        box.style.height = toCovert(rows);
    })

}

const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    [...parentBox.children].forEach(box => {
        box.style.backgroundColor = "transparent";
    })
})

startDefault(30, 20);







//just incase i need it
// [...parentBox.children].forEach(i => {
//     i.style.filter = `brightness(${percent})`;
// })

// let interactionCount = 0;
// let brightness = 100;

// console.log(percent)
// console.log(interactionCount)

// if (interactionCount < 10) {
//     brightness -= 10;
// }

// interactionCount++
// e.target.style.filter = `brightness(${percent})`;

// let percent = brightness + "%";