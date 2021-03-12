const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

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

    updateBigCup()
 } 

//functon for filling the Big Cup

function updateBigCup()  {
    //checks to see which small cups are fulled
    const fullCups = document.querySelectorAll('.cup-small.full').length

   const totalCups = smallCups.length
    // fills big cup based on how many small cups are filled
   if(fullCups === 0) {
        percentage.style.visibility ='hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText =`${fullCups / totalCups * 100}%`
    }

    //removes the text in side the big cup one it is full and adds the remaing values if it is not full
    if(fullCups === totalCups) {
        remained.style.visibility ='hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility ='visible'
        liters.innerText =`${2 - (250 * fullCups / 1000)}L`
    }
}