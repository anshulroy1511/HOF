const store = { apple: 1, banana: 0.5, orange: 0.8 };
const exchangeRate = 80;
const convertedPrices = Object.fromEntries(
    Object.entries(store).map(([item, price]) => [item, price * exchangeRate])
);
console.log(convertedPrices);
