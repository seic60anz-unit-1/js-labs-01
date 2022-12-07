// Every 2 - get back to this
console.log('for every 2')

for(let i = 0; i <= 8; i += 2) {
    console.log(i)
}

// Nine to Three Loop
console.log('nine to 3')

for (let i = 9; i>2; i--) {
    console.log(i)
}

// 9 times table
console.log('9 times table')

for (let i = 0; i <= 90; i += 9) {
    console.log(i)
}

// Even/odd reporter
console.log('odd even repeater')

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    } else if (i % 2 != 0) {
        console.log(`${i} is odd`)
    }
}