const input = "Hello, World!";
setTimeout(() => {
    const reversed = input.split('').reverse().join('');
    console.log(reversed);
}, 2000);
