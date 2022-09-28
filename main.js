//grabbing values from html
let btn = document.querySelector('#button')
let thankYouSec = document.querySelector('.thankYouSection')
let rateSection = document.querySelector(".ratingSection")
let ratings = document.querySelectorAll('.rate')
//adding a click event listner on the submit button: this hides the rating section and takes us to the thank you page
document.querySelector('#button').addEventListener('click', buttonClick)
function buttonClick() {  
    rateSection.classList.add('hidden')
    thankYouSec.classList.remove('hidden')
}
//looping over each rating options
for (const rate of ratings) {
    rate.addEventListener('click', showClickedRate)

    function showClickedRate() {
        rate.style.backgroundColor = "orange";
        rate.style.color = "white";
        document.querySelector('.clickedRate').innerHTML = rate.innerHTML
    }
}