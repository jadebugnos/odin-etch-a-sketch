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
        columns = 30; //default value
        rows = 20;    //default value
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

    // Getter that generates a random hex color code
    get rainbow() {
        return '#' + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, '0');
    },

    // Method that adds the "effect" class to all child elements of the parentBox
    effectOne() {
        [...parentBox.children].forEach(box => {
            box.classList.add("effect");
        })
    }
};

// Placeholder function to retrieve the selected effect from the 'effects' dropdown
function getEffects() {
    const effectChoice = document.getElementById('effects').value;

    // Logic to apply the effect will be added here later
}


// Applies user color or rainbow effect to the clicked element
function getColors(e) {
    const userChoice = document.querySelector('#colors').value;
    const effectChoice = document.getElementById('effects').value;

    if (e.target !== e.currentTarget && userChoice) e.target.style.backgroundColor = userChoice;

    if (e.target !== e.currentTarget && effectChoice) e.target.style.backgroundColor = effectsArr.rainbow;

}

// Initialize grid dimensions and generate boxes
function startDefault(column, row) {
    columns = column;
    rows = row;
    numberofBoxes = columns * row;
    multiplyBox(numberofBoxes);
    // Set width and height for each box based on column and row values
    [...parentBox.children].forEach(box => {
        box.style.width = toCovert(columns);
        box.style.height = toCovert(rows);
    })

}

const clear = document.getElementById('clear');

// Clear background colors of all boxes when 'clear' button is clicked
clear.addEventListener('click', () => {
    [...parentBox.children].forEach(box => {
        box.style.backgroundColor = "transparent";
    })
})

// Initialize the grid with 30 columns and 20 rows
startDefault(30, 20);
