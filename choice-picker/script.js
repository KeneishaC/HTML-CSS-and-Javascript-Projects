const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

//automatically puts cursor in the textarea
textarea.focus()

textarea.addEventListener('keyup', (e) => {
    // checks to see if 'Enter' Key is hit then randomSelect is called()
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

//creates choices after they have been entered into the input
function createTags(input) {
    //truns input string to an array and removes whitespace
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    //seperates each input into seprate choice tags
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}



//function to randomly pick a choice and highlight it once a choice has been made
function randomSelect() {
    //number of times each choice will be hglighted before a choice is selected
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

//function to pick random tag

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

//higlight a tag by adding the highlight class

function highlightTag(tag) {
    tag.classList.add('highlight')
}

//removes highlight from tag by removing highlight class

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}