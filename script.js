//Every 2

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0)
    console.log(i);
}

// 9 to 3

for (let i=9; i>=3; i--) {
    console.log(i);
}

// 9 times tables

for (let i = 0; i < 10; i++){
    const num = 9
    console.log(`${num} times ${i} is ${i*num}`);

}

//Even/Odd Reporter

for (let i=0; i<20; i++){
    if (i%2 === 0) {
        console.log(`${i} is even`);
    } else 
    console.log(`${i} is odd`);
}