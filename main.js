let addValue = document.querySelector('.add-value')
let calckBtn = document.querySelector('.calck-btn')
let result = document.querySelector('.result')


calckBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(addValue.value);
    let resultNumber = addValue.value
    for (let i = 0; i < resultNumber.length; i++) {
        console.log(resultNumber[i]);
    }
})


