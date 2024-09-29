const parentBox = document.querySelector('#box-container');
const numberofBoxes = 16 * 16;
const originalChild = document.createElement('div');
originalChild.classList.add('boxes')



// converts human input into a value to be added to the grid length rows/column;
// const toCovert = input => input / 100;

document.getElementById('user-input').addEventListener('submit',getUserInput);

function getUserInput(event) {
    event.preventDefault();
    const columns = document.getElementById('columns').value;
    const rows =document.getElementById('rows').value;
}



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
    }
})



