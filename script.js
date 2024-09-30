const parentBox = document.querySelector('#box-container');
let numberofBoxes = 16 * 16;
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
        alert("invalid input! only accepts values between 1 to 100 positive numbers.")
        numberofBoxes = 16 * 16;
    } else {
        numberofBoxes = columns * rows;
    }

    multiplyBox(numberofBoxes);
    //sets the new sizes of the box to prevent overflow
    [...parentBox.children].forEach(box => {
        box.style.height = toCovert(columns);
        box.style.width = toCovert(rows);
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

//changes the divs to a random color when hovered for 2 seconds
parentBox.addEventListener('mouseover', e => {
    let brightness = 100;
    let percent = brightness + "%"
    let interactionCount = 0;
    if (e.target !== e.currentTarget) {
        e.target.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        interactionCount++
        [...parentBox.children].forEach(i => {
            i.style.filter = `brightness(${percent})`;
        })
    }

    console.log(percent)
    console.log(interactionCount)
    
    if (interactionCount <= 10) {
        brightness -= 10;
    }
});


multiplyBox(numberofBoxes);
