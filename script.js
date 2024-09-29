const parentBox = document.querySelector('#box-container');
const numberofBoxes = 16 * 16;
const originalChild = document.createElement('div');
originalChild.classList.add('boxes')


function multiplyBox() {
    for (let i = 1; i <= numberofBoxes; i++) {
        let clones = originalChild.cloneNode(true);
        clones.classList.add('boxes');
        parentBox.appendChild(clones);
    }

}

multiplyBox()