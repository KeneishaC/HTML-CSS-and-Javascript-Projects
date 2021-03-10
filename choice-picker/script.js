const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

//automatically puts cursor in the textarea
textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

//creates choices after they have been entered into the input
function createTags(input) {
    //truns input string to an array and removes whitespace
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''
    //seperates each input into seprate choice tags
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}
