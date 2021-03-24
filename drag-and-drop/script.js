const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)

}

function dragStart() {
    //when image is moved the box the user is moving it from will not hold the image
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    //allows image to drop into new box that the user has chosen
   e.preventDefault()
}

function dragEnter(e) {
    //allows image to drop into new box that the user has chose
    e.preventDefault()
}

function dragLeave(e) {
    console.log('drag leave')
}

function dragDrop() {
    //adds div class that hold image to the new box the image is dragged into
    this.className ='empty'
    this.append(fill)
}
