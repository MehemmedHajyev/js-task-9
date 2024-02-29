// Verilmiş üçrəqəmli ədədi rəqəmlərinə ayırın.

// Giriş verilənləri
// Yeganə sətirdə üçrəqəmli tam ədəd (müsbət və ya mənfi) verilir.

// Çıxış verilənləri
// Hər bir rəqəmi nümunədə verildiyi kimi ayrı sətirdə çap edin.

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


