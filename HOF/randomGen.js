let delay = 3; // seconds
console.log(`Generating random number in ${delay} seconds...`);
const interval = setInterval(() => {
    console.log(`${delay} seconds remaining...`);
    delay--;
    if (delay === 0) clearInterval(interval);
}, 1000);
setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number: ${randomNumber}`);
}, 3000);
