// // Every 2
// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
// }

// // 9 to 3
// for (let i = 9; i > 0; i -= 3) {
//     console.log(i);
// };

// // 9 times table
// const nineTimesTable = function () {
//     let lines = ``
//     for (let i = 0; i <= 10; i++) {
//         if (i <= 9) {
//             lines += `9 times ${i} is ${9 * i}\n`
//         } else {
//             lines += `9 times ${i} is ${9 * i}`
//         }

//     }
//     return `
// 9 Times Table
// ================
// ${lines}
// ================
// `;
// }

// console.log(nineTimesTable());


// Even/ loop reporter
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log((`${i} is odd`));
    }
}