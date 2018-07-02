const fill = document.querySelector('.fill-box');
const empties = document.querySelectorAll('.empty-box');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart() {
    this.className += ' hold';
    setTimeout(() => {
        this.className = 'invisible'
    }, 0);
}

function dragEnd() {
    this.className = 'fill-box';
}

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave() {
    this.className = 'empty-box';
}
function dragDrop() {
    this.className = 'empty-box';
    this.append(fill);
}