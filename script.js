//-------------------------------------------
// EVERY 2

let output = ""
for (let i = 0; i < 10; i += 2) {
    output += `${i} `
}

console.log(output)

//-------------------------------------------
// 9 to 3

output = ""
for (let i = 9; i >= 3; i--) {
    output += `${i} `
}

console.log(output)

//-------------------------------------------
// 9 TIMES TABLE

console.log("9 Times Table")
console.log("================")

for (let i = 0; i <= 10; i++) {
    let calc = 9 * i
    console.log(`9 times ${i} is ${calc}`)
}

console.log("================")

//-------------------------------------------
// EVEN/ODD REPORTER

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
}