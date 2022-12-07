// Every 2
for (let i = 0; i < 10; i+=2) {
    console.log(i)
}
// 9 to 3
for (let i = 9; i > 3; i--) {
    console.log(i)
}
// 9 times table 
for (i = 0; i<11; i++){
    console.log(`9 times ${i} is ${9*i}`)
}

// even/odd reporter 
for (i=1; i< 21; i++){
    if (i % 2 === 0){
        console.log(`${i} is even`)
    }else{
        console.log(`${i} is odd`)
    }
}