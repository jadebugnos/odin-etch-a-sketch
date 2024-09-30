const parentBox = document.querySelector('#box-container');
const numberofBoxes = 16 * 16;
const originalChild = document.createElement('div');
originalChild.classList.add('boxes')

// converts human input into a value to be added to the grid length rows/column;
const toCovert = input => Math.floor(+input / 100);




let columns = "";
let rows = "";
function getUserInput(event) {
    event.preventDefault();

    columns = document.getElementById('columns').value;
    rows = document.getElementById('rows').value;
}

document.getElementById('user-input').addEventListener('submit', getUserInput);





function multiplyBox() {
    for (let i = 1; i <= numberofBoxes; i++) {
        let clones = originalChild.cloneNode(true);
        clones.classList.add('boxes');
        parentBox.appendChild(clones);
    }
}

multiplyBox()

parentBox.addEventListener('mouseover', e => {
    if (e.target !== e.currentTarget) {
        e.target.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        console.log(toCovert(rows))
    }

    setTimeout(() => {
        e.target.style.backgroundColor = "transparent";
    }, 2000);
});



