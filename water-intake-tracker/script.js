const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


smallCups.forEach((cup, idx) => {
   cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    //checks to see if cup is already filled or not also can remove a cup that is already filled
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    //fills each cup
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }

    })
} 