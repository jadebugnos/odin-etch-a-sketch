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

    //validates human input
    if (columns > 100 ||
        rows > 100 ||
        columns <= 0 ||
        rows <= 0 ||
        isNaN(columns) ||
        isNaN(rows)) {
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
parentBox.addEventListener('mouseover', getEffects);


const effectsArr = {
    
    get rainbow() {
        return '#' + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, '0');
    }
};


function getEffects(e) {
    const userChoice = document.querySelector('#colors').value;
    // const colorCode = effectsArr[userChoice];

    if (e.target !== e.currentTarget) {
        e.target.style.backgroundColor = userChoice;
    } else if (e.target !== e.currentTarget && userChoice === "rainbow") {
        e.target.style.backgroundColor = colorCode.rainbow;
    }
}






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