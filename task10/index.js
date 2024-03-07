// function wave(str) {
//     const result = [];
//     for (let i = 0; i < str.length; i++) {
//         if (/[a-z]/.test(str[i])) { 
//             const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
//             result.push(waveStr);
//         }
//     }
//     return result;
// }

// const wavedWords = wave('qaqa');
// console.log(wavedWords);

function createPhoneNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let one = numbers[0].toString() + numbers[1].toString() + numbers[2].toString()
        
        let two = numbers[3].toString() + numbers[4].toString() + numbers[5].toString()

        console.log(one + ' ' + two);

    }
}


createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
